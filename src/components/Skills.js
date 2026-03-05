import React, { useState } from 'react';

const skills = [
    { name: 'HTML5', logo: 'logo-html5', color: '#E34F26' },
    { name: 'CSS3', logo: 'logo-css3', color: '#1572B6' },
    { name: 'React', logo: 'logo-react', color: '#61DAFB' },
    { name: 'JavaScript', logo: 'logo-javascript', color: '#F7DF1E' },
    { name: 'Node.js', logo: 'logo-nodejs', color: '#68A063' },
];

function SkillCard({ skill }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                position: 'relative',
                background: hovered
                    ? 'linear-gradient(135deg, rgba(8,145,178,0.15) 0%, rgba(15,23,42,0.95) 100%)'
                    : 'rgba(15,23,42,0.7)',
                border: `1px solid ${hovered ? skill.color + '60' : 'rgba(255,255,255,0.06)'}`,
                borderRadius: '20px',
                padding: '32px 24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '14px',
                cursor: 'default',
                transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
                boxShadow: hovered
                    ? `0 12px 40px rgba(0,0,0,0.4), 0 0 0 1px ${skill.color}25`
                    : '0 2px 8px rgba(0,0,0,0.2)',
                transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
                backdropFilter: 'blur(12px)',
                flex: '1 1 130px',
                maxWidth: '160px',
                minWidth: '120px',
            }}
        >
            <div style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '20px',
                background: `radial-gradient(ellipse at 50% 40%, ${skill.color}20 0%, transparent 70%)`,
                opacity: hovered ? 1 : 0,
                transition: 'opacity 0.4s',
                pointerEvents: 'none',
            }} />

            <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                background: `${skill.color}15`,
                border: `1px solid ${skill.color}30`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '36px',
                transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
                transform: hovered ? 'scale(1.15) rotate(-5deg)' : 'scale(1)',
                position: 'relative',
            }}>
                <ion-icon name={skill.logo} style={{ color: skill.color }} />
            </div>

            <p style={{
                margin: 0,
                fontSize: '14px',
                fontWeight: '600',
                color: hovered ? '#f1f5f9' : '#94a3b8',
                letterSpacing: '0.03em',
                transition: 'color 0.3s',
                position: 'relative',
            }}>
                {skill.name}
            </p>
        </div>
    );
}

export default function Skills() {
    return (
        <section
            id="skills"
            style={{
                padding: '80px 24px',
                background: 'linear-gradient(180deg, #0f172a 0%, #0c1628 100%)',
                position: 'relative',
                overflow: 'hidden',
                fontFamily: "'Segoe UI', system-ui, sans-serif",
            }}
        >
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
          linear-gradient(rgba(8,145,178,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(8,145,178,0.04) 1px, transparent 1px)
        `,
                backgroundSize: '48px 48px',
                pointerEvents: 'none',
            }} />

            <div style={{
                position: 'absolute',
                top: '-80px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '600px',
                height: '300px',
                background: 'radial-gradient(ellipse, rgba(6,182,212,0.07) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                    <p style={{
                        color: '#06b6d4',
                        fontSize: '12px',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        margin: '0 0 12px',
                        fontWeight: '600',
                    }}>
                        What I work with
                    </p>
                    <h2 style={{
                        margin: 0,
                        fontSize: 'clamp(2rem, 5vw, 3rem)',
                        fontWeight: '700',
                        color: '#f1f5f9',
                        lineHeight: '1.1',
                    }}>
                        My <span style={{
                            background: 'linear-gradient(135deg, #06b6d4, #0ea5e9)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>Skills</span>
                    </h2>
                    <div style={{
                        width: '40px',
                        height: '2px',
                        background: 'linear-gradient(90deg, #06b6d4, transparent)',
                        margin: '20px auto 0',
                        borderRadius: '2px',
                    }} />
                </div>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '16px',
                    justifyContent: 'center',
                }}>
                    {skills.map((skill) => (
                        <SkillCard key={skill.name} skill={skill} />
                    ))}
                </div>
            </div>
        </section>
    );
}