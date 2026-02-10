import React, { useEffect, useState } from "react";
import { cn } from "../../lib/Utils";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { API_ENDPOINTS } from "../../services/api";

/* -------------------------------- Message Card -------------------------------- */

const MessageCard = ({ notification, read}) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col gap-3 border-b border-gray-200 pb-5 pt-6 hover:cursor-pointer"
    >
      <div className="flex justify-between items-start font-semibold tracking-wider">
        <div
          className={cn(
            "sm:max-w-[55%] max-w-[75%] sm:text-base text-sm transition-all",
            !open && "line-clamp-2",
            (read || notification.read) && "opacity-50"
          )}
        >
          {notification.text}
        </div>

        {!notification.read && (
          <div className="mt-1 sm:h-3 sm:w-3 h-2 w-2 rounded-full bg-[#00BEF3]" />
        )}
      </div>

      <div className="flex justify-end text-sm text-gray-500">
        {new Date(notification.date_added).toLocaleString()}
      </div>
    </div>
  );
};

/* ------------------------------- Notifications Page ------------------------------- */

const Notification = () => {
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all"); // all | unread
  const [read, setRead] = useState(false);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const token =
          localStorage.getItem("authToken") ||
          sessionStorage.getItem("authToken");

        const response = await fetch(API_ENDPOINTS.MY_NOTIFICATIONS, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch notifications");
        }

        const data = await response.json();
        setNotifications(data.notifications || []);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);
  // mark all as read function
  const markAllAsRead = async ()=>{
    const token = localStorage.getItem("authToken")
    try {
      setLoading(true);
      const response = await fetch(API_ENDPOINTS.MARK_NOTIFICATIONS_READ, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`
        }
      })
      const data = await response.json();
      if(!response.ok){
        alert("failed to mark all pls try again later")
      }else{
        alert("all notifications read")
        setRead(true)
      }
    } catch (error) {
      alert("server or network error pls try again later")
    }finally{
      setLoading(false)
    }
  }
  const unreadCount = notifications.filter((n) => !n.read).length;

  const filteredNotifications =
    filter === "unread"
      ? notifications.filter((n) => !n.read)
      : notifications;
  const buttonClasses = cn(
    "sm:text-base text-sm flex gap-1 font-semibold bg-[#E5F9FE]",
    "text-[var(--color-header)] sm:px-3 sm:py-2 py-1.5 px-2 rounded-2xl"
  );

  const spanClass = "font-bold";

  return (
    <div className="sm:bg-[#F7F7F7] min-h-screen">
      <title>Flintmall - Notifications</title>

      {/* Top Nav */}
      <nav
        className={cn(
          "text-[var(--color-header)] flex items-center justify-between px-6 md:px-36 py-4 md:py-8 shadow-sm bg-white",
          "text-xl xs:text-2xl sm:text-3xl font-bold tracking-[0.015]"
        )}
      >
        <button onClick={() => navigate(-1)}>
          <IoIosArrowBack size={25} />
        </button>
        <h1>Notifications</h1>
        <div />
      </nav>

      {/* Content */}
      <main className="md:max-w-3xl sm:max-w-xl mx-auto py-10 space-y-6">
        <section className="rounded-2xl shadow-sm bg-white sm:px-20 sm:py-16 px-5">
          {/* Filters */}
          <nav className="flex justify-between sm:mb-10 mb-6">
            <div className="flex sm:gap-5 gap-2">
              <button
                onClick={() => setFilter("all")}
                className={buttonClasses}
              >
                All <span className={spanClass}>{notifications.length}</span>
              </button>

              <button
                onClick={() => setFilter("unread")}
                className={buttonClasses}
              >
                Unread <span className={spanClass}>{unreadCount}</span>
              </button>
              
            </div>

            <button
              className="font-semibold sm:text-base text-sm text-[var(--color-header)]"
              onClick={markAllAsRead}
            >
              Mark all as read
            </button>
          </nav>
          {/* Notifications */}
          {loading ? (
            <div className="w-full min-h-screen flex items-center justify-center">
              <div className="animate-spin h-12 w-12 border-4 border-gray-300 border-t-secondary rounded-full"></div>
            </div>
          ) : filteredNotifications.length === 0 ? (
            <div className="text-center py-10 text-gray-500">
              No notifications found
            </div>
          ) : (
            filteredNotifications.map((notification) => (
              <MessageCard
                key={notification.id}
                notification={notification}
                read={read}
              />
            ))
          )}
        </section>
      </main>
    </div>
  );
};

export default Notification;
