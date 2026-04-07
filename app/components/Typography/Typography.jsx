/**
 * Typography – A reusable, polymorphic typography component.
 *
 * Props:
 *  variant  – 'heading-xl' | 'heading-lg' | 'heading-md'
 *             'text-lg'    | 'text-md'     | 'text-sm'
 *             (defaults to 'text-md')
 *  as       – Override the HTML tag (e.g. as="span")
 *  className– Additional CSS classes
 *  children – Content
 *  ...rest  – Any valid HTML attribute (id, onClick, style, etc.)
 *
 * Usage:
 *  <Typography variant="heading-xl">Hero Title</Typography>
 *  <Typography variant="text-sm" as="span" className="text-muted">Subtitle</Typography>
 */

const TAG_MAP = {
  'heading-xl': 'h1',
  'heading-lg': 'h2',
  'heading-md': 'h3',
  'text-lg':    'p',
  'text-md':    'p',
  'text-sm':    'p',
};

export default function Typography({
  variant = 'text-md',
  as,
  className = '',
  children,
  ...rest
}) {
  const Tag = as ?? TAG_MAP[variant] ?? 'p';

  return (
    <Tag className={`${variant} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
