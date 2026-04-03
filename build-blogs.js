const fs = require('fs');
const path = require('path');

const blogsDir = path.join(__dirname, 'blogs');
const outputJson = path.join(__dirname, 'blogs.json');

// Get existing blogPosts array from blog.js to preserve manual data if possible
let existingData = {};
try {
    const blogJs = fs.readFileSync(path.join(__dirname, 'blog.js'), 'utf-8');
    const match = blogJs.match(/const blogPosts = (\[[\s\S]*?\]);/);
    if (match) {
        // Simple evaluation to extract existing data (safe here as it's local trusted data)
        const parsed = eval(match[1]);
        parsed.forEach(post => {
            existingData[post.file] = post;
        });
    }
} catch (e) {
    console.log("Could not parse existing blog.js data, starting fresh.");
}

let blogPosts = [];

const files = fs.readdirSync(blogsDir);

files.forEach(file => {
    if (file.endsWith('.md')) {
        const filePath = path.join(blogsDir, file);
        const fileName = `blogs/${file}`;
        const content = fs.readFileSync(filePath, 'utf-8');
        
        let title = "Başlıksız";
        let date = new Date().toISOString().split('T')[0];
        let excerpt = "";

        // Check if there's frontmatter
        const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
        if (frontmatterMatch) {
            const fm = frontmatterMatch[1];
            fm.split('\n').forEach(line => {
                const parts = line.split(':');
                if (parts.length >= 2) {
                    const key = parts[0].trim();
                    const val = parts.slice(1).join(':').trim();
                    if (key === 'title') title = val;
                    if (key === 'date') date = val;
                    if (key === 'excerpt') excerpt = val;
                }
            });
        } else {
            // Fallback: Read first line as title, next text as excerpt
            const lines = content.split('\n').map(l => l.trim()).filter(l => l.length > 0);
            if (lines.length > 0) {
                title = lines[0].replace(/^#+\s*/, '');
            }
            if (lines.length > 1) {
                // Try to find a paragraph for excerpt
                for (let i = 1; i < lines.length; i++) {
                    if (!lines[i].startsWith('#') && !lines[i].startsWith('![') && lines[i].length > 40) {
                        excerpt = lines[i].length > 150 ? lines[i].substring(0, 150) + "..." : lines[i];
                        break;
                    }
                }
            }
        }

        // If we have manual data preserved from old blog.js, prefer its metadata to avoid losing old data
        if (existingData[fileName]) {
            title = existingData[fileName].title || title;
            date = existingData[fileName].date || date;
            excerpt = existingData[fileName].excerpt || excerpt;
        }

        blogPosts.push({
            file: fileName,
            title: title,
            date: date,
            excerpt: excerpt
        });
    }
});

// Sort by date descending
blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

fs.writeFileSync(outputJson, JSON.stringify(blogPosts, null, 2));
console.log(`Generated blogs.json with ${blogPosts.length} posts.`);
