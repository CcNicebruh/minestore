import { FC } from 'react';
import { joinClasses } from '@helpers/join-classes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type SubMenuItemProps = {
    name: string;
    url: string;
};

export const SumMenuItem: FC<SubMenuItemProps> = ({ name, url }) => {
    const pathname = usePathname();
    const isActive = pathname === url;

    return (
        <Link className="group h-12 flex-row items-center" href={url}>
            <div
                className={joinClasses(
                    'h-7 w-1 rounded-r-lg transition-all',
                    isActive
                        ? 'bg-primary'
                        : 'bg-accent-foreground/60 group-hover:bg-accent-foreground'
                )}
            />
            <span className="ml-4">{name}</span>
        </Link>
    );
};
