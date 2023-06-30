// CollectionMenuList.js

import CollectionMenuCard from './CollectionMenuCard';

export default function CollectionMenuList({ collections }) {
    return (
        <div className="flex flex-col sm:flex-row hide-scrollbar">
            {collections.map((collection, index) => (
                <CollectionMenuCard
                    key={index}
                    title={collection.title}
                    image={collection.image.url}
                    animationClass={index % 2 === 0 ? 'slide-up' : 'slide-down'}
                />
            ))}
        </div>
    );
}
