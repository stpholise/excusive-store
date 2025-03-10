
interface SectionTitleProps {
    label: string
    }

const SectionTitle = ({label}:SectionTitleProps) => {
  return (
    <div className="flex justify-start gap-4 text-red-600 items-center">
        <div className="w-5 h-10 bg-red-600 rounded-sm "></div> 
        <p className="font-semibold">{label}</p>
    </div>
  )
}

export default SectionTitle