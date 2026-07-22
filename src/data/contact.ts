export type CvLanguage = 'es' | 'en'

export const professionalProfile = {
  name: 'Samuel Coco Delfa',
  email: 'samuel.coco.dev@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/samuel-coco-delfa',
  githubUrl: 'https://github.com/SamuCoco04',
  cvs: {
    es: {
      publicPath: 'documents/Samuel_Coco_CV_ES.pdf',
      downloadName: 'Samuel_Coco_CV_ES.pdf',
    },
    en: {
      publicPath: 'documents/Samuel_Coco_CV_EN.pdf',
      downloadName: 'Samuel_Coco_CV_EN.pdf',
    },
  } satisfies Record<
    CvLanguage,
    { publicPath: string; downloadName: string }
  >,
}
