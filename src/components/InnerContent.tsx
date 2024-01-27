export default function InnerContent({ children }: { children: React.ReactNode }) {
    return <div className="2xl:p-10 xl:p-10 md:p-10 p-5 mb-20">
        {children}
    </div>
}