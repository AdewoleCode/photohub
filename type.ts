
export interface UnsplashPhotos  {
    alt_description: string;
    blur_hash: string;
    breadcrumbs: any[]; // Could be a more specific type if breadcrumbs structure is known
    color: string;
    created_at: string;
    current_user_collections: any[]; // Could be a more specific type if collections structure is known
    description: string;
    height: number;
    id: string;
    liked_by_user: boolean;
    likes: number;
    links: {
        self: string;
        html: string;
        download: string;
        download_location: string;
    };
    promoted_at: string;
    slug: string;
    sponsorship: {
        impression_urls: string[];
        tagline: string;
        tagline_url: string;
        sponsor: {
            // Sponsor information structure could be defined here if available
            // Example: id: string; name: string; etc.
        };
    };
    topic_submissions: {
        // Topic submissions structure could be defined here if available
        // Example: travel: { ... }
    };
    updated_at: string;
    urls: {
        raw: string;
        full: string;
        regular: string;
        small: string;
        thumb: string;
        // Additional image URLs can be added here if available
    };
    user: {
        id: string;
        updated_at: string;
        username: string;
        name: string;
        first_name: string;
        // Additional user information can be added here if available
    };
    width: number;
}
