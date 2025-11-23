import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const InviteFriend = () => {
  return (
    <div className="flex flex-col items-center mt-1 p-4 border rounded-xl bg-zinc-900">
      <Image src={"/mail.png"} alt="main" width={80} height={80} />
      <h2 className="font-game text-3xl">Invite Friend</h2>
      <h2 className="font-game">Having Fun? Share this fun with a friend! Enter an email and we will send them a personal invite</h2>
      <div className="flex gap-2 items-center mt-5">
        <Input placeholder="Enter email..." />
        <Button className="font-game text-xl cursor-pointer" size={"lg"} variant={"pixel"}>Invite</Button>
      </div>
    </div>
  );
};

export default InviteFriend;
