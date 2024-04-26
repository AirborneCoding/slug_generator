'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const currentPath = usePathname()

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    let newPath = currentPath;

    // Check if the current path already contains a locale prefix
    const localeRegex = /^(\/[a-z]{2})/;
    const match = currentPath.match(localeRegex);

    if (match) {
      const currentLocale = match[0];
      // Remove the current locale prefix from the path
      newPath = currentPath.replace(currentLocale, '');
    }

    startTransition(() => {
      router.replace(`/${nextLocale}${newPath}`); // Append the current path to the new locale
    });
  };

  return (
    <select
      className="w-full max-w-xs bg-white select select-bordered select-sm"
      defaultValue={localActive}
      onChange={onSelectChange}
      disabled={isPending}
    >
      <option value='ar'>AR</option>
      <option value='fr'>FR</option>
    </select>
  );
}
