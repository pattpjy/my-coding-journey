---
title: "Revamping the Thai Word Game App: Lessons in UX/UI and Design Pattern"
"
layout: post
author: "Patt Sookmark"
banner_image: asset/Revamp.png
---

<img class="blog-banner" src="/asset/Revamp.png" alt="blog-patterns" />

Hello, fellow devs! It's time for an update on the progress of our Thai word game app. After taking a comprehensive UX/UI course, I realized that our app needed a significant overhaul to provide a better user experience. In this blog post, I'll share the changes we made to the app, specifically focusing on revamping our containers and adopting a more user-centric approach.

1. The Impact of UX/UI Knowledge:
   The UX/UI course provided valuable insights into user behavior and design principles. The initial code is now proof of concept that was lacking in terms of usability and visual appeal. Armed with this new knowledge, I set out to enhance the user experience and make the app more engaging and intuitive. During my UX/UI course, I learned the crucial role of creating a visually appealing and organized user interface. I realized that a well-designed layout enhances user engagement and improves overall usability.
2. Rethinking Design Pattern:
   Previously, our containers held the application logic, which posed challenges when it come to managing different views and their associated components. After applying UX/UI principles, I realized that a container for each view (landing page, game view, parent mode view, settings view) would allow better organization and control over specific view-related
   logic.
3. Utilizing Layout components patterns: I decided to embrace the concept of component-based layouts. Instead of relying solely on containers for logic and presentation, I shifted my approach creating separate layout components for each view in the app. This acted as my container view and it allowed me to define the structure of the application in a more granular and reusable manner.

4. Enhanced User Experience:
   The user-centric approach transformed our app into a more enjoyable and intuitive experience. I redesigned the landing page to provide a visually appealing and informative introduction. The game view underwent significant improvements to make learning Thai words more interactive and engaging. Parent mode and settings views were revamped to offer intuitive controls and customization options.
5. Lessons Learned:
   Throughout this process, I learned valuable lessons that will shape our future development endeavors. We realized the importance of considering user needs, conducting user testing, and iterating on design and functionality. The UX/UI course empowered us to think holistically about the user journey and prioritize their satisfaction and engagement. By adopting a component-based layout approach, I experienced several benefits. Firstly, it improved the maintainability of the codebase as each layout component focused on a specific view and its associated structure. Secondly, it enabled greater reusability, as the layout components could be utilized across different parts of the application. Finally, it provided a more intuitive and organized development process, allowing for easier navigation and understanding of the codebase.

As developers, it's essential to continuously learn and adapt to new concepts and principles that enhance our craft. Embracing component-based layouts and layout components has undoubtedly transformed my approach to building user interfaces. I look forward to incorporating these concepts into future projects and further refining the Thai Word Game app based on user feedback and evolving UX/UI best practices.
