import useUser from "@/hooks/useUser";
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";
import UserHero from "@/components/user/UserHero";
import UserBio from "../../components/user/UserBio";
import PostFeed from "@/components/post/PostFeed";
import Header from "@/components/layout/Header";

const UserView = () => {
    const router = useRouter();
    const {userId} = router.query;

    const { data: fetchedUser, isLoading } = useUser(userId as string);

    if ( isLoading || !fetchedUser) {
        return (
            <div
            className="
            flex
            justify-center
            items-center 
            h-full"
            >
                <ClipLoader color="lightblue" size={80}/>

            </div>

        );
    }

    return(
        <>
        <Header showBackArrow label={fetchedUser?.name}/>
        <UserHero userId={userId as string}/>
        <UserBio userId={userId as string}/>
        <PostFeed userId={userId as string}/>
        </>
    );
}

export default UserView;