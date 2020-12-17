import React, { useState } from "react";
import "./sidemenu.scss";
import { Link, Labelbtn } from "components";
import { HomeOutlined, RightOutlined, BlockOutlined } from "@ant-design/icons";
import { motion, AnimatePresence } from "framer-motion";

const menus = [
  {
    id: 1,
    title: "Dashboard",
    link: "/",
    ico: HomeOutlined,
    isOpen: true,
    subMenu: [],
  },
  {
    id: 4,
    title: "Components",
    link: "/",
    ico: HomeOutlined,
    isOpen: false,
    subMenu: [
      {
        id: 441,
        link: "/components/com1",
        title: "Child component 1",
        ico: RightOutlined,
      },
      {
        id: 442,
        link: "dashboard/com2",
        title: "Child component 2",
        ico: RightOutlined,
      },
    ],
  },
  {
    id: 2,
    title: "Setting",
    link: "/setting",
    ico: BlockOutlined,
    isOpen: false,
    subMenu: [
      {
        id: 221,
        link: "/setting/com1",
        title: "Child setting 1",
        ico: RightOutlined,
      },
      {
        id: 222,
        link: "setting/com2",
        title: "Child setting 2",
        ico: RightOutlined,
      },
    ],
  },
  {
    id: 3,
    title: "Logout",
    link: "/logout",
    ico: BlockOutlined,
    isOpen: false,
    subMenu: [],
  },
];

function Sidemenu() {
  const [menu, setMenu] = useState(menus);
  const setActive = (id) => {
    const newMenu = menu.map((list) =>
      list.id === id ? { ...list, isOpen: true } : { ...list, isOpen: false }
    );
    setMenu(newMenu);
  };
  console.log("menu", menu);
  return (
    <ol className="sidemenu">
      {menu.map((item, i) => {
        return (
          <li key={i}>
            <Link
              className={`link-item ${item.isOpen && "active"} `}
              href="# "
              onClick={() => setActive(item.id)}
            >
              <Labelbtn title={item.title} Icons={item.ico} />
              {item.subMenu.length > 0 ? (
                item.isOpen ? (
                  <motion.div
                    initial="right"
                    animate="down"
                    variants={{
                      right: { opacity: 1, transform: "rotate(0deg)" },
                      down: { opacity: 1, transform: "rotate(90deg)" },
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                  >
                    <RightOutlined />
                  </motion.div>
                ) : (
                  <motion.div
                    initial="down"
                    animate="right"
                    variants={{
                      right: { opacity: 1, transform: "rotate(0deg)" },
                      down: { opacity: 1, transform: "rotate(90deg)" },
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                  >
                    <RightOutlined />
                  </motion.div>
                )
              ) : (
                ""
              )}
            </Link>
            <ol className="child-link">
              <AnimatePresence initial={false}>
                {item.isOpen &&
                  item.subMenu.map((childItem, i) => {
                    return (
                      <motion.li
                        key={i}
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1, height: "auto" },
                          collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{
                          duration: 0.5,
                        }}
                      >
                        <Link className="child-link-item" href="# /">
                          <Labelbtn
                            title={childItem.title}
                            Icons={childItem.ico}
                          />
                        </Link>
                      </motion.li>
                    );
                  })}
              </AnimatePresence>
            </ol>
          </li>
        );
      })}

      {/* <li>
        <Link className="link-item" href="/">
          <Labelbtn title="Components" Icons={TableOutlined} />{" "}
          <RightOutlined />
        </Link>
      </li> */}
    </ol>
  );
}

export default Sidemenu;
