export default function Codepen({ id }: { id: string }) {
  return (
    <div className="my-3 print:hidden">
      <iframe
        height="600"
        style={{ marginTop: "10px" }}
        className="w-full"
        scrolling="no"
        src={`https://codepen.io/scarlett1130/embed/${id}`}
        frameBorder="no"
        loading="lazy"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
}
