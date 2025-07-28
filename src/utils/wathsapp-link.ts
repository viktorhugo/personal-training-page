
export const getWhatsAppLink = (phoneNumber: string, message: string) => {

    // Codifica el mensaje para la URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    return whatsappUrl;
};