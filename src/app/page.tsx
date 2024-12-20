'use client';

import NotificationAlert from "@/components/NotificationAlert";
import { useState } from "react";

export default function Home() {
  const [notificationVisible, setNotificationVisible] = useState(true);
  
  return (
    <>
      <NotificationAlert
        message="Usuário atualizado com sucesso!"
        visible={notificationVisible}
        setVisible={setNotificationVisible}
      />
      
      <button onClick={()=>{
        setNotificationVisible(!notificationVisible);
      }}>Atualizar</button>
    </>
  );
}
