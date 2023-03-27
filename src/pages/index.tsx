import Head from 'next/head'
import Files from '@/modules/ui/Files/File'
import { FilesWrapper } from '@/modules/ui/Files/Files.styled'

const mocks = [
  {
    path: "https://i.imgur.com/COeJK7sb.jpg"
  },
  {
    path: "https://filesamples.com/samples/document/docx/sample4.docx"
  },
  {
    path: "/files/ticket-3625785.pdf"
  },
]

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
      <main>
          <div className="container">
            <div className="mt-32">
              <div className="files-block">
                  <div className="flex-container justify-between mb-24">
                    <h3 className="title-h6">Документы</h3>
                  </div>
                <FilesWrapper>
                  {mocks.map((item, id) => (
                      <Files key={id} docName={item.path}/>
                    )
                  )}
                </FilesWrapper>
              </div>
            </div>
          </div>
      </main>
    </>
  )
}
