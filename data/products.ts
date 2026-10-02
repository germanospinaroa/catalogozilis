export type ProductStatus = "published" | "pending";

export type ProductTheme = {
  accent: string;
  dark: string;
  soft: string;
  ink: string;
  gold?: string;
};

export type Product = {
  slug: string;
  name: string;
  brand: string;
  category: string;
  shortDescription: string;
  heroTitle: string;
  heroDescription: string;
  productImage?: string;
  catalogImage?: string;
  heroImage?: string;
  alt: string;
  needs: string[];
  benefits: string[];
  ingredients?: { name: string; headline?: string; description: string; closing?: string; review?: boolean }[];
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
  theme: ProductTheme;
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
    shortDescription: "Una fórmula para apoyar bienestar, recuperación y una rutina diaria más estable.",
    heroTitle: "Cuando sientes desgaste y quieres acompañar mejor tu cuerpo.",
    heroDescription: "Una fórmula de bienestar para personas que quieren apoyar recuperación y sentirse mejor dentro de una rutina constante.",
    productImage: "/products/ice/ice-product.png",
    alt: "Presentación del producto ICE de Zilis",
    needs: ["Cansancio frecuente", "Sensación de desgaste", "Rutinas de bienestar constantes"],
    benefits: ["Acompañamiento diario", "Rutina sencilla", "Apoyo antioxidante"],
    ingredients: [
      { name: "Resveratrol", description: "Compuesto presente en la fórmula y asociado a rutinas de bienestar.", review: true },
      { name: "Cúrcuma", description: "Ingrediente botánico presente en la fórmula.", review: true },
    ],
    howItWorks: "ICE reúne resveratrol y cúrcuma en una fórmula pensada para integrarse a una rutina de bienestar constante.",
    usage: ["Integra el producto a tu rutina siguiendo siempre la etiqueta."],
    warnings: ["No usar esta página para sustituir la etiqueta del producto.", "Consultar a un profesional de salud ante dudas personales."],
    faq: [{ question: "¿Puedo usarlo todos los días?", answer: "Consulta la etiqueta del producto para conocer la recomendación de uso vigente." }],
    relatedProducts: ["amalaki", "rise"],
    disclaimer: "Contenido informativo. Consulta la etiqueta vigente y a un profesional de salud si tienes dudas.",
    status: "published",
    reviewFlags: ["Validar beneficios fisiológicos y cantidades contra etiqueta oficial."],
    theme: { accent: "#1299C5", dark: "#12617A", soft: "#EAF7FB", ink: "#173D4A" },
  },
  {
    slug: "amalaki",
    name: "AMALAKI",
    brand: "Zilis",
    category: "Bienestar diario",
    shortDescription: "Una fórmula herbal para acompañar equilibrio, digestión y vitalidad dentro de una rutina constante.",
    heroTitle: "Cuando quieres darle apoyo diario a tu bienestar.",
    heroDescription: "Una fórmula herbal basada en Amalaki y otros ingredientes botánicos para acompañar bienestar, digestión y equilibrio dentro de una rutina constante.",
    productImage: "/products/amalaki/amalaki-product.png",
    alt: "Presentación del producto Amalaki de Zilis",
    needs: ["Bienestar diario", "Rutinas constantes", "Equilibrio general"],
    benefits: ["Acompañamiento constante", "Fórmula botánica", "Integración sencilla en la rutina"],
    ingredients: [
      { name: "Amalaki", description: "Fruto botánico que aporta el carácter principal de la fórmula y forma parte de su perfil herbal.", review: true },
      { name: "Tulsi", description: "Planta aromática incluida para complementar el perfil botánico de la fórmula.", review: true },
      { name: "Jengibre", description: "Raíz botánica incorporada por su relación tradicional con rutinas de digestión y bienestar.", review: true },
      { name: "Inulina", description: "Fibra que se incluye como parte del perfil de ingredientes de la fórmula.", review: true },
    ],
    howItWorks: "AMALAKI reúne ingredientes botánicos con una lógica sencilla: acompañar varias áreas conectadas del bienestar cotidiano.",
    usage: ["Integra el producto a tu rutina siguiendo siempre la etiqueta."],
    warnings: ["Consultar la etiqueta oficial antes de usar.", "No inferir seguridad para embarazo, lactancia, menores o tratamientos médicos."],
    faq: [{ question: "¿Se puede usar todos los días?", answer: "Consulta la etiqueta del producto para conocer la recomendación de uso vigente." }],
    relatedProducts: ["ice", "ultra-vibe"],
    disclaimer: "Contenido informativo. Consulta la etiqueta vigente y a un profesional de salud si tienes dudas.",
    status: "published",
    reviewFlags: ["Revisar claims sobre sistema inmune, respiración y adaptación al estrés."],
    theme: { accent: "#C51E32", dark: "#781624", soft: "#FBEAEC", ink: "#4C1D24" },
  },
  {
    slug: "b-fit",
    name: "B-FIT",
    brand: "Zilis",
    category: "Metabolismo",
    shortDescription: "Apoyo para metabolismo, digestión, apetito y hábitos de bienestar.",
    heroTitle: "Cuando buscas recuperar sensación de control.",
    heroDescription: "Una fórmula en sobres diseñada para acompañar funciones relacionadas con metabolismo, apetito, digestión y bienestar general dentro de una rutina constante.",
    productImage: "/products/b-fit/b-fit-new.png",
    catalogImage: "/products/b-fit/b-fit-catalog.png",
    heroImage: "/products/b-fit/b-fit-hero.png",
    alt: "Presentación en sobres del producto B-FIT de Zilis",
    needs: ["Comes y poco después vuelves a sentir hambre o aparecen antojos.", "Estás intentando cuidar tu alimentación, pero sostenerla te cuesta.", "Quieres apoyar digestión y rutina metabólica al mismo tiempo.", "Estás trabajando en composición corporal y buscas algo que complemente alimentación y entrenamiento."],
    benefits: ["Metabolismo", "Saciedad", "Digestión", "Equilibrio"],
    ingredients: [
      { name: "Fenogreco", headline: "Apoyo metabólico de origen vegetal.", description: "Una semilla utilizada tradicionalmente y estudiada por su relación con distintos procesos metabólicos.", closing: "Dentro de B-FIT forma parte del frente orientado al metabolismo." },
      { name: "Berberina", headline: "Un compuesto vegetal ampliamente estudiado.", description: "La berberina ha sido investigada por su relación con el metabolismo de glucosa y lípidos.", closing: "Ayuda a entender por qué B-FIT va más allá de ser simplemente una fórmula de fibra." },
      { name: "Inulina", headline: "Fibra prebiótica para el entorno intestinal.", description: "La inulina es una fibra fermentable que sirve como sustrato para determinadas bacterias del intestino.", closing: "Aporta el componente prebiótico dentro del enfoque digestivo de B-FIT." },
      { name: "Cáscara de psyllium", headline: "Fibra soluble que ayuda con volumen y saciedad.", description: "Al entrar en contacto con líquidos, el psyllium forma una textura gelatinosa característica de este tipo de fibra.", closing: "Dentro de la fórmula ayuda a explicar el enfoque en digestión y sensación de saciedad." },
      { name: "Beta-cariofileno (BCP)", headline: "Un compuesto botánico con una interacción particular.", description: "El BCP está presente naturalmente en distintas plantas y especias y es conocido por su interacción con receptores CB2 del sistema endocannabinoide.", closing: "Aporta a la fórmula una dimensión distinta a la de las fibras y otros componentes metabólicos." },
      { name: "Oleoiletanolamida (OEA)", headline: "Un lípido bioactivo relacionado con señales de saciedad.", description: "La OEA ha sido estudiada por su relación con procesos asociados a la ingesta y la sensación de llenura.", closing: "Es uno de los componentes que mejor explica el eje de saciedad y control dentro de B-FIT." },
    ],
    howItWorks: "B-FIT combina fibras, compuestos vegetales y lípidos bioactivos con funciones diferentes dentro de una misma rutina.",
    usage: ["1 sobre al día, disuelto en agua fría o tibia.", "Una forma práctica de integrarlo es aproximadamente 30 minutos antes de la primera comida del día.", "La consistencia importa más que buscar un “día perfecto”. B-FIT está pensado como parte de una rutina, no como una solución ocasional."],
    warnings: ["No es un medicamento y no sustituye tratamiento médico, alimentación ni ejercicio.", "No se recomienda su uso en embarazo o lactancia sin autorización médica.", "Consulta a un profesional de salud si tienes dudas."],
    faq: [
      { question: "¿B-FIT es un quemador de grasa?", answer: "No lo presentamos de esa manera. Su fórmula reúne componentes relacionados con metabolismo, saciedad y salud digestiva. Sigue siendo un complemento de los hábitos, no un sustituto de alimentación o actividad física." },
      { question: "¿Lo tengo que tomar con una comida?", answer: "La rutina sugerida es disolver un sobre en agua y tomarlo aproximadamente 30 minutos antes de la primera comida del día." },
      { question: "¿Tengo que hacer una dieta extrema para usar B-FIT?", answer: "No. Tiene más sentido dentro de una alimentación que puedas sostener y una rutina acorde con tu objetivo." },
      { question: "¿Puedo tomar más de un sobre para obtener mejores resultados?", answer: "No. Utilizar más producto no significa obtener mejores resultados. Respeta la porción recomendada." },
      { question: "¿Tiene sentido usarlo solo algunos días?", answer: "B-FIT está planteado como parte de una rutina consistente. La regularidad tiene más sentido que utilizarlo únicamente de forma ocasional." },
    ],
    relatedProducts: ["ice"],
    disclaimer: "B-FIT es un suplemento y no reemplaza una alimentación equilibrada ni hábitos saludables. Estos productos no están diseñados para diagnosticar, tratar o prevenir enfermedades. Consulta con un profesional de salud si tienes dudas.",
    status: "published",
    reviewFlags: ["Revisar claims de detoxificación, microplásticos, hormonas y resultados metabólicos."],
    theme: { accent: "#00A3E0", dark: "#006C9C", soft: "#E7F7FD", ink: "#16445B" },
  },
  {
    slug: "edge",
    name: "EDGE",
    brand: "Zilis",
    category: "Energía y enfoque",
    shortDescription: "Energía y enfoque para trabajo, estudio, entrenamiento y jornadas exigentes.",
    heroTitle: "Cuando necesitas que tu mente siga tu ritmo.",
    heroDescription: "Diseñado para acompañar concentración, claridad mental y rendimiento durante jornadas de trabajo, estudio o entrenamiento.",
    productImage: "/products/edge/edge-product.png",
    alt: "Presentación del producto EDGE de Zilis",
    needs: ["Necesitas concentración prolongada", "Tienes una jornada exigente", "Vas a entrenar", "Estás estudiando o trabajando durante varias horas", "Quieres una opción práctica para acompañar enfoque y energía"],
    benefits: ["Apoyo al enfoque", "Energía para momentos de demanda", "Formato stick pack"],
    ingredients: [{ name: "Fórmula EDGE", description: "Una combinación diseñada para acompañar enfoque y energía.", review: true }],
    howItWorks: "EDGE ofrece un formato práctico para integrar una fórmula de enfoque y energía a los momentos de mayor demanda del día.",
    usage: ["Disolver 1 stick pack al día en 300–500 ml de agua, siguiendo la etiqueta.", "Evitar consumirlo muy cerca de la hora de dormir."],
    warnings: ["No inferir seguridad individual por actividad, edad, embarazo, lactancia o tratamiento médico.", "Consultar la etiqueta oficial sobre cafeína y otros estimulantes."],
    faq: [{ question: "¿Cuándo se suele tomar?", answer: "Puede integrarse en la mañana o antes de momentos de concentración, siempre siguiendo la etiqueta." }],
    relatedProducts: ["rise", "accell"],
    disclaimer: "Contenido informativo. Consulta la etiqueta vigente y un profesional de salud si tienes dudas.",
    status: "published",
    reviewFlags: ["Validar la composición, cafeína, claims de energía celular y rendimiento."],
    theme: { accent: "#00A5C8", dark: "#00667D", soft: "#E8F8FB", ink: "#174552" },
  },
  {
    slug: "rise",
    name: "RISE",
    brand: "Zilis",
    category: "Energía y enfoque",
    shortDescription: "Café con Amalaki pensado para acompañar energía y enfoque dentro de tu rutina.",
    heroTitle: "Cuando quieres seguir tomando café, pero vivirlo diferente.",
    heroDescription: "Café con Amalaki pensado para acompañar energía y enfoque dentro de tu rutina.",
    productImage: "/products/rise/rise-product.png",
    alt: "Presentación del producto RISE de Zilis",
    needs: ["Energía", "Enfoque", "Rutina de café"],
    benefits: ["Base de café arábica", "Acompañamiento del enfoque", "Energía más progresiva"],
    ingredients: [
      { name: "Café arábica colombiano", description: "Base de café de la fórmula.", review: true },
      { name: "Extracto de café verde", description: "Ingrediente de la fórmula asociado a la energía.", review: true },
      { name: "Amalaki", description: "Fruta botánica presente en la fórmula.", review: true },
    ],
    howItWorks: "RISE parte de una base de café arábica y suma los componentes disponibles en la fórmula para integrarse a una rutina de café con intención.",
    usage: ["Prepara y utiliza el producto siguiendo siempre la etiqueta."],
    warnings: ["Revisar la cantidad de cafeína en la etiqueta.", "No asumir que una experiencia más estable es igual para todas las personas.", "Consultar a un profesional de salud si tienes dudas."],
    faq: [{ question: "¿Es un café?", answer: "Sí. El café arábica colombiano es la base de la fórmula; consulta la etiqueta para su preparación." }],
    relatedProducts: ["edge", "ice"],
    disclaimer: "Contenido informativo. Consulta la etiqueta vigente y un profesional de salud si tienes dudas.",
    status: "published",
    reviewFlags: ["Revisar claims sobre ansiedad, dependencia, metabolismo y soporte antioxidante."],
    theme: { accent: "#6D5136", dark: "#37291E", soft: "#F3ECE4", ink: "#342820", gold: "#B69255" },
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
    theme: { accent: "#68705A", dark: "#414936", soft: "#EFF2E9", ink: "#293126" },
  },
  {
    slug: "ultra-vibe",
    name: "ULTRA VIBE",
    brand: "Zilis",
    category: "Cannabinoides",
    shortDescription: "CBD + CBG + CBC para acompañar calma, equilibrio, recuperación y bienestar cotidiano.",
    heroTitle: "Cuando necesitas bajar revoluciones sin apagar tu día.",
    heroDescription: "Una fórmula diseñada para acompañar calma, recuperación, estado de ánimo y bienestar cotidiano.",
    productImage: "/products/ultra-vibe/ultra-vibe-product.png",
    alt: "Presentación del producto Ultra Vibe de Zilis",
    needs: ["Estrés diario", "Relajación", "Recuperación"],
    benefits: ["Acompañamiento de la calma", "Bienestar general", "Rutina de equilibrio cotidiano"],
    ingredients: [
      { name: "CBD", description: "Cannabinoide de la planta de cáñamo que forma parte del perfil de la fórmula y de su propuesta de bienestar cotidiano.", review: true },
      { name: "CBG", description: "Cannabinoide incluido para complementar el perfil de componentes de la fórmula.", review: true },
      { name: "CBC", description: "Cannabinoide que completa la combinación declarada de la fórmula Ultra Vibe.", review: true },
    ],
    howItWorks: "Ultra Vibe reúne varios cannabinoides en una fórmula full spectrum pensada para acompañar el bienestar desde varios ángulos.",
    usage: ["Utiliza el producto siguiendo siempre la etiqueta."],
    warnings: ["Consultar la etiqueta y la normativa aplicable antes de usar.", "No inferir seguridad para embarazo, lactancia, menores o personas bajo tratamiento médico."],
    faq: [{ question: "¿Qué significa full spectrum?", answer: "Describe una fórmula que reúne varios componentes del cáñamo; consulta la etiqueta para conocer su composición." }],
    relatedProducts: ["amalaki", "ice"],
    disclaimer: "Contenido informativo. Consulta la etiqueta vigente y a un profesional de salud si tienes dudas.",
    status: "published",
    reviewFlags: ["Revisar claims emocionales, tecnología UltraCell™, composición y requisitos regulatorios."],
    theme: { accent: "#C52B68", dark: "#73183F", soft: "#FBEAF1", ink: "#4B1C33" },
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
