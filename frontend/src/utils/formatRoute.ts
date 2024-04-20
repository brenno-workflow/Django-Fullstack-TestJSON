export function formatRoute(route: string): {
  fullName: string
  initials: string
} {
  // Remover qualquer caractere de codificação de espaço (%20) e substituir por espaços normais
  const decodedRoute = decodeURIComponent(route)

  // Dividir a rota pelos espaços
  const names = decodedRoute.split(' ')

  // Capitalizar a primeira letra de cada nome e unir com um espaço
  const fullName = names
    .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
    .join(' ')

  // Pegar as iniciais de cada nome
  const initials = names.map((name) => name.charAt(0).toUpperCase()).join('')

  return { fullName, initials }
}
