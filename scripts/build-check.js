const fs = require('fs');
const path = require('path');

function getDirectorySize(dirPath) {
  let totalSize = 0;
  
  function calculateSize(itemPath) {
    const stats = fs.statSync(itemPath);
    
    if (stats.isDirectory()) {
      const files = fs.readdirSync(itemPath);
      files.forEach(file => {
        calculateSize(path.join(itemPath, file));
      });
    } else {
      totalSize += stats.size;
    }
  }
  
  calculateSize(dirPath);
  return totalSize;
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Check if build directory exists
const buildPath = path.join(__dirname, '..', 'build');
if (fs.existsSync(buildPath)) {
  const size = getDirectorySize(buildPath);
  console.log(`Build size: ${formatBytes(size)}`);
  
  if (size > 50 * 1024) {
    console.warn('⚠️  Bundle size exceeds 50KB limit!');
  } else {
    console.log('✅ Bundle size is within 50KB limit');
  }
} else {
  console.log('Build directory not found. Run "npm run build" first.');
}
