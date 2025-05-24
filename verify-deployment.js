#!/usr/bin/env node

/**
 * Deployment Verification Script
 * Verifies that the HackHub02 project is ready for deployment
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 HackHub02 Deployment Verification\n');

const checks = [
  {
    name: 'Build Output Directory',
    check: () => fs.existsSync('.next'),
    message: 'Next.js build output directory exists'
  },
  {
    name: 'Standalone Build',
    check: () => fs.existsSync('.next/standalone'),
    message: 'Standalone build output is available'
  },
  {
    name: 'Environment Template',
    check: () => fs.existsSync('.env.example'),
    message: 'Environment variables template exists'
  },
  {
    name: 'Next.js Configuration',
    check: () => fs.existsSync('next.config.ts'),
    message: 'Next.js configuration file exists'
  },
  {
    name: 'Netlify Configuration',
    check: () => fs.existsSync('netlify.toml'),
    message: 'Netlify deployment configuration exists'
  },
  {
    name: 'Package.json Scripts',
    check: () => {
      const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      return pkg.scripts && pkg.scripts.build && pkg.scripts.start;
    },
    message: 'Build and start scripts are configured'
  },
  {
    name: 'Middleware Configuration',
    check: () => fs.existsSync('middleware.ts'),
    message: 'Next.js middleware is configured'
  },
  {
    name: 'Deployment Documentation',
    check: () => fs.existsSync('DEPLOYMENT.md'),
    message: 'Deployment documentation exists'
  }
];

let passed = 0;
let failed = 0;

checks.forEach(({ name, check, message }) => {
  try {
    if (check()) {
      console.log(`✅ ${name}: ${message}`);
      passed++;
    } else {
      console.log(`❌ ${name}: Check failed`);
      failed++;
    }
  } catch (error) {
    console.log(`❌ ${name}: Error during check - ${error.message}`);
    failed++;
  }
});

console.log(`\n📊 Summary: ${passed} passed, ${failed} failed`);

if (failed === 0) {
  console.log('\n🎉 All checks passed! Your project is ready for deployment.');
  console.log('\nNext steps:');
  console.log('1. Set up your production environment variables');
  console.log('2. Deploy to your hosting platform (Netlify/Vercel)');
  console.log('3. Configure your domain and SSL');
} else {
  console.log('\n⚠️  Some checks failed. Please review the issues above.');
}
