import { auth, signOut } from '@/auth';

const OverviewPage = async () => {
  const session = await auth();

  return (
    <div>
      <h5 className="">{JSON.stringify(session?.user)}</h5>
      <form
        action={async () => {
          'use server';
          await signOut();
        }}>
        <button type="submit">Sign out</button>
      </form>
    </div>
  );
};

export default OverviewPage;
