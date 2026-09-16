export type ProductStatus = "published" | "pending";

export type Product = {
  slug: string;
  name: string;
  brand: string;
  category: string;
  shortDescription: string;
  heroTitle: string;
  heroDescription: string;
  productImage?: string;
  alt: string;
  needs: string[];
  benefits: string[];
  ingredients?: { name: string; description: string; review?: boolean }[];
  howItWorks?: string;
  usage?: string[];
  warnings?: string[];
  faq?: { question: string; answer: string }[];
  nutritionFacts?: string;
  documents?: string[];
  relatedProducts: string[];
  disclaimer: string;
  status: ProductStatus;
  reviewFlags?: string[];
};

export const categories = [
  "Todos",
  "Energía y enfoque",
  "Metabolismo",
  "Bienestar diario",
  "Antioxidantes",
  "Digestión",
  "Cannabinoides",
  "Recuperación",
];

export const products: Product[] = [
  {
    slug: "ice",
    name: "ICE",
    brand: "Zilis",
    category: "Antioxidantes",
    shortDescription: "Una fórmula que acompaña rutinas de bienestar frente al cansancio y el desgaste diario.",
    heroTitle: "Soporte diario para una rutina que se sienta más ligera.",
    heroDescription: "La referencia disponible presenta ICE alrededor de resveratrol y cúrcuma. La información técnica completa queda pendiente de validación oficial.",
    productImage: "/products/ice/ice-product.png",
    alt: "Presentación del producto ICE de Zilis",
    needs: ["Cansancio frecuente", "Sensación de desgaste", "Rutinas de bienestar constantes"],
    benefits: ["Acompañamiento diario", "Rutina sencilla", "Enfoque antioxidante según la fuente consultada"],
    ingredients: [
      { name: "Resveratrol", description: "Compuesto mencionado en la página de referencia; función y cantidad oficial pendientes de validar.", review: true },
      { name: "Cúrcuma", description: "Ingrediente mencionado en la página de referencia; función y cantidad oficial pendientes de validar.", review: true },
    ],
    howItWorks: "La fuente describe una combinación pensada para acompañar la respuesta general del cuerpo ante la carga cotidiana. Se requiere documentación oficial para completar esta explicación.",
    usage: ["Presentación, cantidad y preparación: pendientes de información oficial."],
    warnings: ["No usar esta página para sustituir la etiqueta del producto.", "Consultar a un profesional de salud ante dudas personales."],
    faq: [{ question: "¿Puedo usarlo todos los días?", answer: "La fuente lo presenta como apoyo diario, pero la indicación exacta debe confirmarse en la etiqueta oficial." }],
    relatedProducts: ["amalaki", "rise"],
    disclaimer: "Contenido informativo basado en la referencia pública disponible; requiere revisión de claims y ficha técnica.",
    status: "published",
    reviewFlags: ["Validar beneficios fisiológicos y cantidades contra etiqueta oficial."],
  },
  {
    slug: "amalaki",
    name: "AMALAKI",
    brand: "Zilis",
    category: "Bienestar diario",
    shortDescription: "Una fórmula de apoyo constante para equilibrio y bienestar general.",
    heroTitle: "Cuando buscas acompañar tu bienestar con constancia.",
    heroDescription: "La página de referencia presenta Amalaki como una fórmula de apoyo general con ingredientes botánicos. La información oficial completa aún debe incorporarse.",
    productImage: "/products/amalaki/amalaki-product.png",
    alt: "Presentación del producto Amalaki de Zilis",
    needs: ["Bienestar diario", "Rutinas constantes", "Equilibrio general"],
    benefits: ["Acompañamiento constante", "Fórmula botánica según la referencia", "Integración sencilla en la rutina"],
    ingredients: [
      { name: "Amalaki", description: "Ingrediente principal mencionado en la fuente; detalles de fórmula pendientes.", review: true },
      { name: "Tulsi", description: "Ingrediente mencionado en la fuente; función y cantidad oficial pendientes.", review: true },
      { name: "Jengibre", description: "Ingrediente mencionado en la fuente; función y cantidad oficial pendientes.", review: true },
      { name: "Inulina", description: "Ingrediente mencionado en la fuente; función y cantidad oficial pendientes.", review: true },
    ],
    howItWorks: "La fuente lo describe como un acompañamiento de varias áreas del bienestar cotidiano. Se necesita la ficha oficial para precisar su funcionamiento sin sobreinterpretar claims.",
    usage: ["Presentación, cantidad y preparación: pendientes de información oficial."],
    warnings: ["Consultar la etiqueta oficial antes de usar.", "No inferir seguridad para embarazo, lactancia, menores o tratamientos médicos."],
    faq: [{ question: "¿Qué información falta?", answer: "La ficha nutricional, la indicación exacta de uso y las precauciones completas aún no están incorporadas." }],
    relatedProducts: ["ice", "ultra-vibe"],
    disclaimer: "Contenido informativo independiente. La referencia pública requiere revisión antes de usarlo como ficha técnica.",
    status: "published",
    reviewFlags: ["Revisar claims sobre sistema inmune, respiración y adaptación al estrés."],
  },
  {
    slug: "b-fit",
    name: "B-FIT",
    brand: "Zilis",
    category: "Metabolismo",
    shortDescription: "Una fórmula presentada como apoyo para metabolismo, digestión y hábitos de bienestar.",
    heroTitle: "Apoyo para entender mejor tu rutina metabólica.",
    heroDescription: "La referencia pública describe B-FIT como una herramienta nutricional, no como medicamento. Las indicaciones técnicas deben confirmarse en la etiqueta oficial.",
    productImage: "/products/b-fit/b-fit-product.png",
    alt: "Presentación en sobres del producto B-FIT de Zilis",
    needs: ["Antojos", "Digestión", "Metabolismo"],
    benefits: ["Apoyo a una rutina metabólica", "Formato en sobres", "Acompañamiento digestivo según la referencia"],
    ingredients: [
      { name: "Fórmula B-FIT", description: "La composición completa no está disponible en la referencia consultada.", review: true },
    ],
    howItWorks: "La página de referencia lo presenta como apoyo a procesos relacionados con metabolismo y digestión. No se detallan aquí mecanismos médicos ni resultados garantizados.",
    usage: ["La referencia indica 1 sobre al día, disuelto en agua fría o tibia; confirmar siempre contra la etiqueta oficial.", "La referencia sugiere tomarlo preferiblemente en la mañana."],
    warnings: ["No es un medicamento y no sustituye tratamiento médico, alimentación ni ejercicio.", "No usar claims sobre detoxificación, hormonas o pérdida de peso como promesas de resultado.", "No inferir seguridad para embarazo, lactancia, menores o tratamientos médicos."],
    faq: [{ question: "¿Cómo se presenta?", answer: "La referencia pública muestra sobres individuales. La cantidad y preparación exactas deben confirmarse con la etiqueta del lote disponible." }],
    relatedProducts: ["accell", "ice"],
    disclaimer: "La descripción se limita a la referencia pública disponible y está sujeta a revisión de claims.",
    status: "published",
    reviewFlags: ["Revisar claims de detoxificación, microplásticos, hormonas y resultados metabólicos."],
  },
  {
    slug: "edge",
    name: "EDGE",
    brand: "Zilis",
    category: "Energía y enfoque",
    shortDescription: "Una opción presentada para acompañar enfoque y energía durante momentos de demanda.",
    heroTitle: "Más claridad para los momentos que piden atención.",
    heroDescription: "La referencia pública posiciona EDGE alrededor de energía y enfoque. La composición completa y la información nutricional todavía no están disponibles aquí.",
    productImage: "/products/edge/edge-product.png",
    alt: "Presentación del producto EDGE de Zilis",
    needs: ["Concentración", "Enfoque", "Jornadas exigentes"],
    benefits: ["Apoyo al enfoque", "Energía para momentos de demanda", "Formato stick pack según la referencia"],
    ingredients: [{ name: "Fórmula EDGE", description: "Composición completa pendiente de documentación oficial.", review: true }],
    howItWorks: "La fuente lo describe como apoyo a energía y concentración. Esta ficha evita presentar esos efectos como garantizados o terapéuticos.",
    usage: ["La referencia indica 1 stick pack al día y disolverlo en 300–500 ml de agua; confirmar en la etiqueta oficial.", "La referencia recomienda evitarlo cerca de la hora de dormir."],
    warnings: ["No inferir seguridad individual por actividad, edad, embarazo, lactancia o tratamiento médico.", "Consultar la etiqueta oficial sobre cafeína y otros estimulantes."],
    faq: [{ question: "¿Cuándo se suele tomar?", answer: "La referencia menciona mañana, estudio, trabajo intenso o entrenamiento; el horario adecuado depende de la etiqueta y de la respuesta individual." }],
    relatedProducts: ["rise", "accell"],
    disclaimer: "Contenido informativo independiente; la ficha técnica y los claims requieren revisión oficial.",
    status: "published",
    reviewFlags: ["Validar la composición, cafeína, claims de energía celular y rendimiento."],
  },
  {
    slug: "rise",
    name: "RISE",
    brand: "Zilis",
    category: "Energía y enfoque",
    shortDescription: "Café con una propuesta de energía más estable para acompañar el día.",
    heroTitle: "Una forma distinta de vivir tu café.",
    heroDescription: "La referencia pública menciona café arábica colombiano, café verde y amalaki. La ficha nutricional y las cantidades quedan pendientes.",
    productImage: "/products/rise/rise-product.png",
    alt: "Presentación del producto RISE de Zilis",
    needs: ["Energía", "Enfoque", "Rutina de café"],
    benefits: ["Base de café arábica", "Acompañamiento del enfoque", "Experiencia de energía más progresiva según la fuente"],
    ingredients: [
      { name: "Café arábica colombiano", description: "Base de café mencionada en la referencia; cantidad pendiente.", review: true },
      { name: "Extracto de café verde", description: "Ingrediente mencionado en la referencia; cantidad pendiente.", review: true },
      { name: "Amalaki", description: "Ingrediente mencionado en la referencia; cantidad y función pendiente.", review: true },
    ],
    howItWorks: "La referencia propone combinar café con otros ingredientes para una experiencia de energía distinta. No se presentan aquí promesas sobre ansiedad, dependencia o efectos fisiológicos.",
    usage: ["Preparación, cantidad y momento de uso: pendientes de información oficial."],
    warnings: ["Revisar la cantidad de cafeína en la etiqueta.", "No asumir que una experiencia más estable es igual para todas las personas.", "Consultar a un profesional de salud si tienes dudas."],
    faq: [{ question: "¿Es un café?", answer: "Sí, la referencia lo presenta con café arábica colombiano como base. La preparación exacta aún debe validarse." }],
    relatedProducts: ["edge", "ice"],
    disclaimer: "Ficha construida a partir de la referencia pública disponible; pendiente de verificación técnica.",
    status: "published",
    reviewFlags: ["Revisar claims sobre ansiedad, dependencia, metabolismo y soporte antioxidante."],
  },
  {
    slug: "accell",
    name: "ACCELL",
    brand: "Zilis",
    category: "Energía y enfoque",
    shortDescription: "Entrada de catálogo pendiente de ficha individual oficial suficiente.",
    heroTitle: "Contenido de producto pendiente.",
    heroDescription: "ACCELL aparece en el catálogo de referencia, pero su página individual no está disponible de forma confiable para completar una ficha responsable.",
    productImage: "/products/accell/accell-product.png",
    alt: "Presentación del producto ACCELL de Zilis",
    needs: ["Energía sostenida", "Constancia diaria", "Digestión"],
    benefits: ["Entrada conservada en el catálogo", "Imagen de referencia disponible", "Ficha preparada para activarse"],
    ingredients: undefined,
    usage: ["Pendiente de etiqueta y documentación oficial."],
    warnings: ["No se deben inferir dosis, ingredientes ni beneficios a partir de esta entrada."],
    faq: [{ question: "¿Cuándo estará disponible?", answer: "Se activará cuando contemos con información oficial suficiente para construir la página individual." }],
    relatedProducts: ["b-fit", "rise"],
    disclaimer: "Producto conservado por solicitud del proyecto; contenido individual pendiente de información oficial.",
    status: "pending",
    reviewFlags: ["Falta la página individual confiable y la ficha técnica oficial completa."],
  },
  {
    slug: "ultra-vibe",
    name: "ULTRA VIBE",
    brand: "Zilis",
    category: "Cannabinoides",
    shortDescription: "Una fórmula de bienestar general enfocada en calma y equilibrio cotidiano.",
    heroTitle: "Acompañar el bienestar cuando necesitas bajar revoluciones.",
    heroDescription: "La referencia pública menciona CBD, CBG y CBC en una fórmula full spectrum. Las cantidades, certificaciones y precauciones completas requieren fuente oficial.",
    productImage: "/products/ultra-vibe/ultra-vibe-product.png",
    alt: "Presentación del producto Ultra Vibe de Zilis",
    needs: ["Estrés diario", "Relajación", "Recuperación"],
    benefits: ["Acompañamiento de la calma", "Bienestar general", "Rutina de equilibrio cotidiano según la referencia"],
    ingredients: [
      { name: "CBD", description: "Cannabinoide mencionado en la referencia; cantidad y especificación pendientes.", review: true },
      { name: "CBG", description: "Cannabinoide mencionado en la referencia; cantidad y especificación pendientes.", review: true },
      { name: "CBC", description: "Cannabinoide mencionado en la referencia; cantidad y especificación pendientes.", review: true },
    ],
    howItWorks: "La fuente lo presenta como una fórmula de bienestar con varios cannabinoides. No se describen efectos médicos ni se garantiza una respuesta individual.",
    usage: ["Presentación, cantidad y preparación: pendientes de información oficial."],
    warnings: ["Consultar la etiqueta y la normativa aplicable antes de usar.", "No inferir seguridad para embarazo, lactancia, menores o personas bajo tratamiento médico."],
    faq: [{ question: "¿Qué significa full spectrum?", answer: "Es una descripción de la fórmula usada en la referencia pública; la composición exacta debe confirmarse con documentación oficial." }],
    relatedProducts: ["amalaki", "ice"],
    disclaimer: "Contenido informativo independiente; no sustituye la etiqueta ni la orientación de un profesional de salud.",
    status: "published",
    reviewFlags: ["Revisar claims emocionales, tecnología UltraCell™, composición y requisitos regulatorios."],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
