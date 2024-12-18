import {getTranslations, setRequestLocale} from 'next-intl/server';

type Props = {
  params: Promise<{locale: string}>;
}

export default async function IndexPage({params}: Props) {
  const {locale} = await params
  setRequestLocale(locale)

  const t = await getTranslations('IndexPage');

  return <h1>{t('title')}</h1>;
}
