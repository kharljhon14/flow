export default function Video() {
  return (
    <div className="flex items-center justify-center">
      <video
        style={{ width: '100%', height: '100%' }}
        controls
      >
        <source src="/videos/sample.mp4" />
      </video>
    </div>
  );
}
