import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
//import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

export default function Dashboard() {
  const user = useSelector((state: any) => state.user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p>Welcome to Dashboard!</p>
      {user && (
        <div>
          <p>{user.email}</p>
          <p>{user.name}</p>
        </div>
      )}
    </div>
    // <Sidebar>
    //   <SidebarContent>
    //     <SidebarGroup>
    //       <SidebarGroupLabel>Application</SidebarGroupLabel>
    //       <SidebarGroupContent>
    //         <SidebarMenu>
    //           {items.map((item) => (
    //             <SidebarMenuItem key={item.title}>
    //               <SidebarMenuButton asChild>
    //                 <a href={item.url}>
    //                   <item.icon />
    //                   <span>{item.title}</span>
    //                 </a>
    //               </SidebarMenuButton>
    //             </SidebarMenuItem>
    //           ))}
    //         </SidebarMenu>
    //       </SidebarGroupContent>
    //     </SidebarGroup>
    //   </SidebarContent>
    // </Sidebar>
  );
}
