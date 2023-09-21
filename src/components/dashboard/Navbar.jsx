import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Navbar,
  NavbarMenu,
  NavbarMenuItem,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarItem,
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

export const NavigationBar = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: "/exercise", text: "تمرین" },
    { id: "/race", text: "مسابقه" },
    { id: "/team", text: "تیم" },
    { id: "/learn", text: "آموزش" },
    { id: "/article", text: "مقاله" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="shadow-sm border-b-1">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link
            className="font-bold text-inherit cursor-pointer"
            to="/dashboard"
          >
            CodeScope
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem
            isActive={item.id === pathname}
            className={item.id === pathname ? "text-indigo-500" : ""}
            key={index}
          >
            <Link to={item.id}>{item.text}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-start">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">علی محمدی کیا</p>
              <p className="font-semibold">ali@gmail.com</p>
            </DropdownItem>
            <DropdownItem key="settings">پروفایل</DropdownItem>
            <DropdownItem key="settings">تنظیمات</DropdownItem>
            <DropdownItem key="team_settings">تیم های من</DropdownItem>
            <DropdownItem key="analytics">پیام های من</DropdownItem>
            <DropdownItem key="help_and_feedback">ارتباط با ما</DropdownItem>
            <DropdownItem key="logout" color="danger">
              خروج
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.text}-${index}`}>
            <Link color="foreground" className="w-full" to={item.id} size="lg">
              {item.text}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
