import React, { useState } from 'react';
import './ImageLoader.css';

interface ImageLoaderProps {
    src: string;
    alt: string;
    className?: string;
}

const ImageLoader: React.FC<ImageLoaderProps> = ({ src, alt, className }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    const handleError = () => {
        setHasError(true);
        setIsLoaded(true);
    };

    return (
        <div className="image-loader-container">
            {!isLoaded && !hasError && (
                <div className="image-skeleton"></div>
            )}
            <img
                src={src}
                alt={alt}
                className={`image-loader ${className} ${isLoaded ? 'loaded' : ''}`}
                onLoad={handleLoad}
                onError={handleError}
                style={{ display: hasError ? 'none' : 'block' }}
            />
            {hasError && (
                <div className="image-error">
                    Erro ao carregar imagem
                </div>
            )}
        </div>
    );
};

export default ImageLoader;