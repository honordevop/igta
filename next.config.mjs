/** @type {import('next').NextConfig} */
import createMDX from '@next/mdx'

const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "cdn-icons-png.flaticon.com"],
  },
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below

};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

// export default nextConfig;
// Merge MDX config with Next.js config
export default withMDX(nextConfig)
