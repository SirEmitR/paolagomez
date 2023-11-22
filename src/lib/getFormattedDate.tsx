export default function getFormattedDate(date: string) {
    return new Intl.DateTimeFormat('es-MX', {
        dateStyle: 'long'
    }).format(new Date(date))
}