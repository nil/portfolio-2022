import React from "react"
import Link from "next/link"
import {useRouter} from 'next/router';

const Language = ({ categories }) => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      {router.asPath}
      {/* <Link href={router.asPath} locale="en">{router.pathname}</Link>
      <Link href={router.asPath} locale="ca">Català</Link>
      <Link href={router.asPath} locale="es">Español</Link> */}
    </div>
  )
}

export default Language
