import { NextResponse } from 'next/server'

import formidable from 'formidable'

export const config = {
  api: {
    bodyParser: false,
  },
}

export async function POST(req, res) {

  const form = formidable()

  form.parse(req, (err, fields, files) => {
    if (err) {
      throw err 
    }

    const uploadedFile = files.file;

    console.log('uploadedFile', uploadedFile)
    return NextResponse.json(uploadedFile)
  });
}


