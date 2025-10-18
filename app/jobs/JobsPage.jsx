'use client';

export default function JobsPage() {
  return (
    <>
      {/* Job Listings Iframe */}
      <section
        style={{
          width: '100%',
          height: '100%',
          padding: 0,
          margin: 0,
          
        }}
      >
        <iframe
          src="https://optimhire.com/d/Search-job-iframe?ref_code=sivagaminathan-chandran&skill=&positions=&dark_color=01af6a&light_color=000000"
          width="100%"
          height="800"
          style={{ border: 'none', marginTop: '-100px' }}
          title="OptimHire Job Listings"
        ></iframe>
      </section>
    </>
  );
}
