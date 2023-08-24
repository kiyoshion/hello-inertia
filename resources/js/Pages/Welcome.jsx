import AppHead from '@/Layouts/AppHead';
import Layout from '@/Layouts/Layout';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <Layout>
            <AppHead
                title="Hello Inertia"
                desc="This is a sample application."
            />
        </Layout>
    );
}
