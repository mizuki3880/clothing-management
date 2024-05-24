import React from "react";
import { auth, signOut } from "auth";
import DashboardItem from "../../../components/main/dashboard/dashboard";

const DashboardPage = async () => {
  const session = await auth();
  return (
    <div>
      <DashboardItem />
      {/* <div>
        {JSON.stringify(session)}
        <form
          action={async () => {
            "use server";

            await signOut();
          }}>
          <button type="submit">Sign out</button>
        </form>
      </div> */}
    </div>
  );
};

export default DashboardPage;
