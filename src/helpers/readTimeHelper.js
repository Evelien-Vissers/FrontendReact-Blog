export const calculateReadTime = (content) => {
    const words = content.trim().split(/\s+/).length; // Tel het aantal woorden
    const readTime = Math.ceil(words / 100 * 0.3); // 100 woorden per 0.3 minuten, afgerond naar boven
    return readTime;
};