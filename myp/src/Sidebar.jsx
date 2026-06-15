// function Sidebar() {
//     const activeItem = 'Home'
//     const sections = [
//         {
//             title: 'Main',
//             items: ['Home', 'Explore', 'Shorts', 'Subscriptions'],
//         },
//         {
//             title: 'Library',
//             items: ['Library', 'History', 'Your videos', 'Watch later', 'Liked videos'],
//         },
//     ]

//     return (
//         <aside
//             style={{
//                 width: '240px',
//                 padding: '16px',
//                 background: '#ffffff',
//                 borderRight: '1px solid #e6e6e6',
//                 minHeight: '100vh',
//             }}
//         >
//             <div
//                 style={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     marginBottom: '24px',
//                     fontSize: '18px',
//                     fontWeight: '700',
//                     color: '#202020',
//                 }}
//             >
//                 <span
//                     style={{
//                         display: 'inline-flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         width: '28px',
//                         height: '28px',
//                         borderRadius: '8px',
//                         background: '#ff0000',
//                         color: '#ffffff',
//                         marginRight: '10px',
//                         fontSize: '14px',
//                     }}
//                 >
//                     ▶
//                 </span>
//                 YouTube
//             </div>
//             {sections.map((section) => (
//                 <div key={section.title} style={{ marginBottom: '20px' }}>
//                     <div
//                         style={{
//                             margin: '12px 0 8px',
//                             fontSize: '12px',
//                             textTransform: 'uppercase',
//                             color: '#606060',
//                         }}
//                     >
//                         {section.title}
//                     </div>
//                     <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
//                         {section.items.map((item) => {
//                             const isActive = item === activeItem
//                             return (
//                                 <li
//                                     key={item}
//                                     style={{
//                                         display: 'flex',
//                                         alignItems: 'center',
//                                         padding: '10px 12px',
//                                         borderRadius: '8px',
//                                         color: isActive ? '#ff0000' : '#202020',
//                                         background: isActive ? '#fff0f0' : 'transparent',
//                                         cursor: 'pointer',
//                                         margin: '4px 0',
//                                         transition: 'background 0.2s ease',
//                                     }}
//                                 >
//                                     {item}
//                                 </li>
//                             )
//                         })}
//                     </ul>
//                 </div>
//             ))}
//         </aside>
//     )
// }
// export default Sidebar;

function Sidebar(){
    const menu=["Home","Shorts","Library","Subscription","Histry"]
    return(
        <div>
            {
                menu.map((a)=>(
                    <p key={a} >{a}</p>
                ))
            }
        </div>
    )
}export default Sidebar
