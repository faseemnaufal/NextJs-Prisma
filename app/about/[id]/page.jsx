import Link from "next/link"

const DynamicPage = ({params}) => {
    return (
      <div>
        <h1 className="text-4xl">This is About Page with ID: {params.id}</h1>

        <Link href="/">Home Page</Link>
      </div>
    )
  }
  
  export default DynamicPage
  