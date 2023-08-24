<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
use Inertia\Inertia;
use App\Models\Item;
use Auth;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Items/Index', [
            'items' => Item::orderByDesc('created_at')->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Items/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $item = new Item;
        $item->id = uniqid();
        $item->title = $request->title;
        $item->body = $request->body;
        $item->user_id = Auth::id();
        $item->save();

        if ($request->image) {
            $file_name = 'images/items/' . uniqid() . '.jpg';
            $image = \Image::make($request->file('image')->getRealPath())
                ->resize(960, 540, function($constraint) {
                    $constraint->aspectRatio();
                });
            Storage::disk('public')->put($file_name, (string) $image->encode('jpg', 80));
            $item->image = $file_name;

            $thumbnail = \Image::make($request->file('image')->getRealPath())->resize(null, 160, function($constraint) {
                $constraint->aspectRatio();
                $constraint->upsize();
            });
            $bin = base64_encode($thumbnail->encode('jpeg'));

            $item->thumbnail = $bin;
            $item->save();
        }

        return to_route('items.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Inertia::render('Items/Show', [
            'item' => Item::findOrFail($id),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return Inertia::render('Items/Edit', [
            'item' => Item::findOrFail($id),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $item = Item::updateOrCreate(
            ['id' => $id, 'user_id' => Auth::id()],
            ['title' => $request->title, 'body' => $request->body]
        );

        if ($request->image) {
            if ($item->image && Storage::disk('public')->exists($item->image)) {
                Storage::disk('public')->delete($item->image);
            }
            $file_name = 'images/items/' . uniqid() . '.jpg';
            $image = \Image::make($request->file('image')->getRealPath())
                ->resize(960, 540, function($constraint) {
                    $constraint->aspectRatio();
                });
            Storage::disk('public')->put($file_name, (string) $image->encode('jpg', 80));
            $item->image = $file_name;

            $thumbnail = \Image::make($request->file('image')->getRealPath())->resize(null, 160, function($constraint) {
                $constraint->aspectRatio();
                $constraint->upsize();
            });
            $bin = base64_encode($thumbnail->encode('jpeg'));

            $item->thumbnail = $bin;
            $item->update();
        }

        return Inertia::render('Items/Show', [
            'item' => Item::findOrFail($id),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $item = Item::findOrFail($id);

        if ($item->image && Storage::disk('public')->exists($item->image)) {
            Storage::disk('public')->delete($item->image);
        }

        $item->delete();

        return to_route('items.index');
    }
}
