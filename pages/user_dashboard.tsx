import React, { useEffect, useState } from "react";
import { API } from "aws-amplify";


export default function UserDashboard() {
  return (
    <div>
        <button>Create User</button>
        <button>Create Data</button>
    </div>
  );
}