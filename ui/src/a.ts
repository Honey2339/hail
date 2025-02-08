const { simpleParser } = require("mailparser");

const string = `Received: by mail-qk1-f178.google.com with SMTP id af79cd13be357-7be49f6b331so311119685a.1for <prasoon@hail.prasoon.lol>; Sat, 08 Feb 2025 08:07:51 -0800 (PST)DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;d=gmail.com; s=20230601; t=1739030870; x=1739635670; darn=hail.prasoon.lol;h=to:subject:message-id:date:from:mime-version:from:to:cc:subject:date:message-id:reply-to;bh=MaXp4N4AsM1bHdKH57sERzG+3y11rYbABMjcooA4hIk=;b=Wyauxw7QVd5Ge3Lv4SR1T/qs7IPfM5/bSyKfl8w2MEjCE4JY4gZsDk1GxugUArnrago5WC2nTu/LNs+tzQ5NIpy6yycBaSi3jZCD59cXQ0K7GMhPc72kauCf6G1qvd/xz7jZmEj3Fp3yfl7iGICwZRi4xpGvbq88GTatwlcdk5qA4Mx7oMHpCYeQyeXyfT/bK4Dh6AMnO3TZ6HVRQ53DFGktVl6CjdPhRJY5oXumAKGCOr/Aj/6T6/fPMezjTdaAjWs4cN0P3cDNgFaG3NTuMtYNXpRi9VK+iWE6jlQ/IB/LD2HC7jPU2FJ52sfMK42jYn1i1vA8Lzr4rMOgQEg2/A==X-Google-DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;d=1e100.net; s=20230601; t=1739030870; x=1739635670;h=to:subject:message-id:date:from:mime-version:x-gm-message-state:from:to:cc:subject:date:message-id:reply-to;bh=MaXp4N4AsM1bHdKH57sERzG+3y11rYbABMjcooA4hIk=;b=mynQCpt1GafbCxW3qvU3QiXqDEhCmHP0E5dcl0ZFxtET2c/6qUlH7Iw5/bzHw+KO9Qh2QHCrPeEw+FP5m7B5/cYJfrglEAZL8gceC2+5KSylRu0qLz93ZiM7k2NW3KV9KXN0rzbDGjlyH9H9gzws9FGWh4IOuf9wC4RPEbfYyhrbVUKt8hPNngfFYLMG7qckj4k4vGct/hHh+vg38ihjl6RKpad7AiP65r2xha8SzB6BuCieNwm7/VI2q5LLgwFiqXAtF0EcTVBFMBpIvkfrJdrq6oZ45yffy8kZrCEZ/IKOv9nkNaaqLXP+NFOd6gzuftd5I1fZST87Y1C3ZwKQUQ==X-Gm-Message-State: AOJu0YwWp/L1o8boFpEB1fXqBR5ByRy9AleVmDsh7gKEXCCaAJ3AFnnifsPOVEYo0RqtudxnTVrGXa0OOAXFAiQa/AiceEqhTeAAXvQ65xnhlehYQFyxupA+IZKdPYEwNmn2pegsSLJvGxpJkvl/oKlwb7+iQCKpXCnGX-Gm-Gg: ASbGncvE9Fx1RUJHdFzrEQ+UY97XdMODeXMrNdoLhYNqqdO2T2KKVuwBsE00LDozxYr/t362Oy8C/YwhZQyrWe+ciC/NX0Cu8YllSHURWYHlYJ1BdaKzOGSodWEJLbAM77x6JT46KbUI/A==X-Google-Smtp-Source: AGHT+IHgXIfflbjJxoLXcAIVSdKU5Ng+6G8tV+HhUnhogwg9MmZ2Gc92OSKD8L3niKv6W/LhiRNg0wiFKKXHmfwDSV8=X-Received: by 2002:a05:6820:2107:b0:5f7:3654:4595 with SMTP id006d021491bc7-5fc5e71b659mr4402395eaf.5.1739030382138; Sat, 08 Feb 202507:59:42 -0800 (PST)MIME-Version: 1.0From: Sky5 <prasoon2honey@gmail.com>Date: Sat, 8 Feb 2025 21:29:31 +0530X-Gm-Features: AWEUYZlrYiufoLkGqgQfjlSMTxkopFKQlHcph85CCZHAj-bvcgnjwBMPP3JSeOIMessage-ID: <CALxuRy=-MwcS58PUWDFTZp3N8hj2qrONngp-26rnK_Yc=p5xiQ@mail.gmail.com>Subject: kjhdgkjhTo: prasoon@hail.prasoon.lolContent-Type: multipart/alternative; boundary="0000000000002e8df0062da3904c"--0000000000002e8df0062da3904cContent-Type: text/plain; charset="UTF-8"kdjfhkjdfhkjhjk--0000000000002e8df0062da3904cContent-Type: text/html; charset="UTF-8"<div dir="ltr">kdjfhkjdfhkjhjk</div>--0000000000002e8df0062da3904c--`;

const actualString = `Received: by mail-ej1-f52.google.com with SMTP id a640c23a62f3a-ab651f1dd36so467045966b.0
        for <shubh@flux.shubh.sh>; Fri, 31 Jan 2025 11:59:04 -0800 (PST)
DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;
        d=gmail.com; s=20230601; t=1738353543; x=1738958343; darn=flux.shubh.sh;
        h=to:subject:message-id:date:from:mime-version:from:to:cc:subject
         :date:message-id:reply-to;
        bh=rekzXjvS0ubqLvrRn6XnygwUDF4kaCzYsxilmZAZMEY=;
        b=HcXlJLsS8Jg9mF0lEYqKE0bBLCo4xe1hmTc8zj3S6exiMEIi9LUwYg7gRoyO6mM2b+
         RFio9jfLNbH7p5dp6lW//V2LA2HFiFtsL8L0dZ072YrvAUE07sV6BsI6RflXDVuazgrq
         jjxn5pdas787YWYskgGfY88brYQvUmCvGn4VHxMCrk26OFqfmc+ewUj/NXmv7Er9f2qc
         n7bp9gtCBd/keznB8mjDQUPSCkZxKjugaIrUJpGevHJ6Wjdy2CztKgevhOK/Un1mXJMX
         TKOFnaKkIhMAfNyrj1h64KbpEfv5wGra78cA0yL2De9WGMazWnqWBwirAumRpshbboE9
         z1Zg==
X-Google-DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;
        d=1e100.net; s=20230601; t=1738353543; x=1738958343;
        h=to:subject:message-id:date:from:mime-version:x-gm-message-state
         :from:to:cc:subject:date:message-id:reply-to;
        bh=rekzXjvS0ubqLvrRn6XnygwUDF4kaCzYsxilmZAZMEY=;
        b=YnzQXLEKwJJs18pDhCyiElr94+Xk/gFzx4e4TESXppft0SLnDU31MUvX8QvJVl+Der
         y5grqhq+f4G1hNQM4oAaaEPxPmpR+ynD+5eERtAmI+KvD8MuzsmszmZF5U8jQ81z5w6f
         Fl92mpxWdcfhjdshQZG98/sizni9nYgUPc6SuFmuA5XDnEEKT9/A3tJPMHkFCIQLjD7t
         XV5v8ZZdAYM/XyYRgUg0eQ4xuKwmnYQf9OVnQVkupKfAM218sx1cAn+UtVoWQuTRZdYB
         k6vko48NoYgmLsZrkMwFPVUma4HQqOomXe4oRHddN0cQFNDnQq4qA6zq0oLezZes8Ejs
         yIoA==
X-Gm-Message-State: AOJu0Yyo+fm3L3j96El0nOVdqmbylbPwBgwhNCptnCjjmQUGb4yYFfs0
	JNX8CDFGvvs/XmX+lZTxCyHcu3eZLgSY/t7CCppEqK4kIVpLZAQA5z4WTuac2lwhg0OdCjUpy1O
	2xjtILMYWsakupfjqfSs3advMPOtu0GDzXYo=
X-Gm-Gg: ASbGncue9LGiRN/8UJlk9BLqnDhRrL7eFt32U1wik1s29IsKLu/Ajbr7+xh+B2C4MUv
	vWVgplGA6xZYOsazrb/HJ8SoD5xNMJSaci/FprMhto0UdWCoXxgO5QeubRb0oQtZ7r3xetMvtlE
	llI2qMJGn0/Z3NTP4Itl/0kuSRrzDF
X-Google-Smtp-Source: AGHT+IH+Gp8yMxgwT0w2jZvd6phthTz721WiaTvKHJdKH8cUqX9nvj9tk8F/vk0cAWi551qDjZu4SJh0o50l4iQew9Q=
X-Received: by 2002:a17:907:6ea8:b0:aa6:9198:75a6 with SMTP id
 a640c23a62f3a-ab6cfcca019mr1330569166b.21.1738353543237; Fri, 31 Jan 2025
 11:59:03 -0800 (PST)
MIME-Version: 1.0
From: Shubham Singh <shubh622005@gmail.com>
Date: Sat, 1 Feb 2025 01:28:52 +0530
X-Gm-Features: AWEUYZkrm3GuQYL4g6ZEvvKVwqTxtZASmCiv3Pdc77xtIxJKm9sK8TDHoV3wMuU
Message-ID: <CAGAookjo0FBgbJir3oOeWekwg2dLrSpBnA1ZcSKF2tuU68KpMQ@mail.gmail.com>
Subject: Hi
To: shubh@flux.shubh.sh
Content-Type: multipart/alternative; boundary="0000000000007058cb062d05f95e"
 
--0000000000007058cb062d05f95e
Content-Type: text/plain; charset="UTF-8"
 
hiiiiiiiii
 
--0000000000007058cb062d05f95e
Content-Type: text/html; charset="UTF-8"
 
<div dir="ltr">hiiiiiiiii<br></div>
 
--0000000000007058cb062d05f95e--
.
 `;

async function hello() {
  console.log(await simpleParser(actualString));
}
hello();
