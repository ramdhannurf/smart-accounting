export default function InnerContent({ children }: { children: React.ReactNode }) {
    return <div className="px-10 py-10">
        {children}
    </div>
}