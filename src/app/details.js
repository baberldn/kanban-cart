const data = [
    {
      id: "waterboarding-1",
      title: "OPEN",
      notifications: 3,
      tasks: [
        {
          id: "taskmaster-1",
          title: {
            text: "Operasyon Birimi",
            color: "#F38744",
          },
          description:
            "Bu örnek görevdir. Örnek görevin içeriğine dair açıklama detail’da bulunmaktadır.",
          date: "05.02.2024-10.02.2024",
          milestone: "Milestone Name",
          priority: "green",
          people: [
            {
              name: "p1",
              photo: "images/p1.png",
            },
            {
              name: "p2",
              photo: "images/p2.png",
            },
          ],
        },
        {
          id: "taskmaster-2",
          title: {
            text: "Teknik Birimi",
            color: "#2083D7",
          },
          description: "İkinci bir görev.",
          date: "05.02.2024-10.02.2024",
          milestone: "Milestone Name",
          priority: "blue",
  
          people: [
            {
              name: "p1",
              photo: "images/p1.png",
            },
            {
              name: "p3",
              photo: "images/p3.png",
            },
          ],
        },
        {
          id: "taskmaster-3",
  
          title: {
            text: "Test ve Onay Birimi",
            color: "#C80B0B",
          },
          description:
            "Bu örnek görevdir. Örnek görevin içeriğine dair açıklama detail’da bulunmaktadır.",
          date: "05.02.2024-10.02.2024",
          milestone: "Milestone Name",
          priority: "red",
  
          people: [
            {
              name: "p5",
              photo: "images/p5.png",
            },
          ],
        },
      ],
    },
    {
      id: "waterboarding-2",
  
      title: "129f",
      notifications: 3,
      tasks: [],
    },
  ];
  
  export default data;
  