import CompleteProfileContainer from "@/container/authContainer/completeProfileContainer";



export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="container py-4">
            <CompleteProfileContainer />
            {children}
        </div>
    );
}

