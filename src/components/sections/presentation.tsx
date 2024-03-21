'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Input from '../input/input'
import Button from '../button/button'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Presentation = () => {
  const email = 'soancavil@gmail.com'

  const [copied, setCopied] = useState(false)

  const onCopyClipboard = (result: any) => {
    console.log(result);
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }

  return (
    <section className="flex flex-col justify-center items-center md:flex-row gap-2 w-full">
      <div className="md:w-3/12">
        <div className="h-[150px] w-[150px] md:h-[200px] md:w-[200px] rounded-full relative overflow-hidden border-4 border-gray border-opacity-60">
          <Image src={'/sebas-photo.png'} alt="sebas-photo" fill sizes='100%' />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center md:items-start gap-3 md:w-9/12">
        <h1 className="text-3xl md:text-5xl font-philosopher text-center">
          Sebastián Ancavil
        </h1>
        <h1 className="text-xl md:text-3xl font-buda text-center">
          Fullstack JS developer & programming professor
        </h1>
        <div className="w-full relative flex items-center gap-2">
          <Input value={email} disabled={true} />
          <CopyToClipboard onCopy={(text, result)=>onCopyClipboard(result)} text={email}>
            <Button width={30}>
              {!copied ? (
                <Image src={'/copy.svg'} height={40} width={40} alt="copy" />
              ) : (
                <Image src={'/tick.svg'} height={40} width={40} alt="tick" />
              )}
            </Button>
          </CopyToClipboard>
        </div>
      </div>
    </section>
  )
}

export default Presentation
