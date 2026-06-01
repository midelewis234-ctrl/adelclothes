// Quick Supabase connection test
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fobnodfctrjgolwcckqj.supabase.co';
const supabaseAnonKey = 'sb_publishable_yVstd-ttRj9fHx4POTt2rg_065dZSF0';
const bucketName = 'images';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testConnection() {
  console.log('Testing Supabase connection...\n');
  
  // 1. Test basic client initialization
  console.log('✓ Supabase client initialized');
  
  // 2. List buckets
  console.log('\nAttempting to list storage buckets...');
  try {
    const { data: buckets, error: bucketsError } = await supabase.storage.listBuckets();
    
    if (bucketsError) {
      console.error('❌ Error listing buckets:', bucketsError.message);
    } else {
      console.log('✓ Buckets found:', buckets.map(b => b.name).join(', '));
      
      const imagesBucket = buckets.find(b => b.name === bucketName);
      if (imagesBucket) {
        console.log(`✓ '${bucketName}' bucket exists`);
        console.log('  - Public:', imagesBucket.public);
      } else {
        console.error(`❌ '${bucketName}' bucket NOT found. Available buckets: ${buckets.map(b => b.name).join(', ')}`);
      }
    }
  } catch (err) {
    console.error('❌ Exception listing buckets:', err.message);
  }
  
  // 3. Try uploading a test file
  console.log(`\nAttempting to upload test file to '${bucketName}'...`);
  try {
    const testBlob = new Blob(['test content'], { type: 'text/plain' });
    const { data, error: uploadError } = await supabase.storage
      .from(bucketName)
      .upload(`test-${Date.now()}.txt`, testBlob, {
        cacheControl: '3600',
        upsert: false,
      });
    
    if (uploadError) {
      console.error('❌ Upload failed:', uploadError.message);
      console.error('   Status:', uploadError.status);
    } else {
      console.log('✓ Test file uploaded successfully:', data.path);
      
      // Try getting public URL
      const { data: urlData } = supabase.storage.from(bucketName).getPublicUrl(data.path);
      console.log('✓ Public URL:', urlData.publicUrl);
    }
  } catch (err) {
    console.error('❌ Exception during upload:', err.message);
  }
}

testConnection();
