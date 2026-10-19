export interface GreetingConfig {
  recipientName: string; // If set (e.g. "Thiên Phúc"), it will be highlighted or addressed
  senderName: string;
  hero: {
    badge: string;
    date: string;
    tagline: string;
    description: string;
    ctaButton: string;
  };
  giftBox: {
    instruction: string;
    hint: string;
  };
  letter: {
    subtitle: string;
    title: string;
    paragraphs: string[];
    closing: string;
    senderSign: string;
    magicButton: string;
  };
  final: {
    badge: string;
    headline: string;
    supportingMessage: string;
    replayButton: string;
    readAgainButton: string;
  };
  music: {
    defaultVolume: number;
    bgmUrl: string; // Romantic royalty-free audio or Web Audio synthesized melody fallback
  };
}

export const greetingConfig: GreetingConfig = {
  recipientName: "",
  senderName: "",
  hero: {
    badge: "ĐẶC BIỆT DÀNH TẶNG EM",
    date: "",
    tagline: "GỬI EM BÉ",
    description: "Một hộp thư - một món quà đặc biệt dành riêng cho em...",
    ctaButton: "MỞ HỘP THƯ & MÓN QUÀ",
  },
  giftBox: {
    instruction: "Một món quà nhỏ dành riêng cho em",
    hint: "Chạm nhẹ vào chiếc hộp để mở bất ngờ ✨",
  },
  letter: {
    subtitle: "",
    title: "Gửi Em 🎀 – Bông Hoa Xinh Đẹp 🌸",
    paragraphs: [
      "Một cô gái xinh đẹp, dễ thương, chăm chỉ và có thật nhiều điều đáng yêu... 🎀💗",
      "Chúc em luôn xinh đẹp, mạnh khỏe, vui vẻ và gặp thật nhiều may mắn. 🍀 Mong mỗi ngày của em đều có những niềm vui nho nhỏ, những bất ngờ dễ thương và thật nhiều lý do để mỉm cười. 💕",
      "Mong sự chăm chỉ và mọi cố gắng của em đều được đền đáp xứng đáng, những điều em mong chờ sẽ dần trở thành hiện thực. ✨ Dù đôi lúc có mệt mỏi, stress hay gặp chuyện không vui, hãy nhớ dành thời gian nghỉ ngơi một chút và làm những điều khiến em hạnh phúc nhé. 🌷",
      "Em xứng đáng nhận được thật nhiều yêu thương, sự dịu dàng và những điều tốt đẹp nhất. 💖 Mong rằng hôm nay, ngày mai và cả những ngày sau nữa, em đều có thể vui vẻ và hạnh phúc theo cách riêng của mình. ☀️"
    ],
    closing: "Gửi đến em thật nhiều điều ngọt ngào nhất. 💐💗✨",
    senderSign: "",
    magicButton: "NHẤN ĐỂ BẮT ĐẦU KHOẢNH KHẮC DIỆU KỲ",
  },
  final: {
    badge: "20-10",
    headline: "THIÊN PHÚC",
    supportingMessage: "Hãy luôn mỉm cười, luôn tự tin và nhớ rằng em xứng đáng với tất cả những điều tốt đẹp nhất.",
    replayButton: "THỬ KHOẢNH KHẮC DIỆU KỲ",
    readAgainButton: "ĐỌC LẠI HỘP THƯ",
  },
  music: {
    defaultVolume: 0.6,
    bgmUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-piano-112199.mp3",
  }
};
