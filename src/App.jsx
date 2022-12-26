import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./features/auth/Login";
import AdminDash from "./components/AdminDash";
import Welcome from "./features/auth/Welcome";
import NotesList from "./features/notes/NotesList";
import UsersList from "./features/users/UsersList";
import EditNote from "./features/notes/EditNote";
import NewNote from "./features/notes/NewNote";
import EditUser from "./features/users/EditUser";
import NewUserForm from "./features/users/NewUserForm";
import Prefetch from "./features/auth/PreFetch";
import PersistLogin from "./features/auth/PersistLogin";
import RequireAuth from "./features/auth/RequireAuth";
import { ROLES } from "./config/roles";
import useTitle from "./hooks/useTitle";

function App() {
    useTitle('Soheil Tech')
    return (
        <Routes>
            <Route path="/" element={<Layout />} />
            <Route index element={<Public />} />
            <Route path="login" element={<Login />} />

            <Route element={<PersistLogin />}>
                <Route
                    element={
                        <RequireAuth allowedRoles={[...Object.values(ROLES)]} />
                    }
                >
                    <Route element={<Prefetch />}>
                        <Route path="dash" element={<AdminDash />}>
                            <Route index element={<Welcome />} />

                            <Route
                                element={
                                    <RequireAuth
                                        allowedRoles={[ROLES.Admin, ROLES.Manager]}
                                    />
                                }
                            >
                                <Route path="users">
                                    <Route index element={<UsersList />} />
                                    <Route path=":id" element={<EditUser />} />
                                    <Route
                                        path="new"
                                        element={<NewUserForm />}
                                    />
                                </Route>
                            </Route>

                            <Route path="notes">
                                <Route index element={<NotesList />} />
                                <Route path=":id" element={<EditNote />} />
                                <Route path="new" element={<NewNote />} />
                            </Route>
                        </Route>
                    </Route>
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
