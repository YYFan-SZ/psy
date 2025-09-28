document.addEventListener('DOMContentLoaded', function() {
    // 获取URL参数
    const urlParams = new URLSearchParams(window.location.search);
    const resourceId = urlParams.get('id');
    
    // 如果没有resourceId，返回首页
    if (!resourceId) {
        window.location.href = 'index.html';
        return;
    }
    
    // 资源数据库
    const resourceDatabase = {
        // 2.3.3 临床与咨询心理学
        'apadiv12': {
            id: 'apadiv12',
            name: 'APA Division 12 - Society of Clinical Psychology',
            logo: 'https://div12.org/wp-content/uploads/2014/12/div12logo.png',
            url: 'https://div12.org/',
            shortDescription: 'APA临床心理学分会，提供临床实践指南和资源。',
            shortDescription_en: 'APA Division of Clinical Psychology, providing clinical practice guidelines and resources.',
            fullDescription: 'APA第12分会（临床心理学会）是美国心理学会下属的专业组织，致力于促进临床心理学的科学、教学和实践。该分会为临床心理学家提供专业发展资源、继续教育机会和最新研究信息。其网站包含临床实践指南、循证治疗方法数据库、专业认证信息以及针对特定心理障碍的治疗资源。分会定期发布《临床心理学》期刊，涵盖临床研究、评估方法和治疗创新等内容。此外，该组织还提供学生和早期职业心理学家的指导和支持，举办年度会议和专业研讨会，促进临床心理学领域的知识交流和专业网络建设。对于临床心理学从业者、研究人员和学生，这是一个获取专业资源和发展机会的重要平台。',
            fullDescription_en: 'APA Division 12 (Society of Clinical Psychology) is a professional organization under the American Psychological Association dedicated to advancing the science, teaching, and practice of clinical psychology. The division provides clinical psychologists with professional development resources, continuing education opportunities, and the latest research information. Its website contains clinical practice guidelines, evidence-based treatment databases, professional certification information, and treatment resources for specific psychological disorders. The division regularly publishes the journal "Clinical Psychology," covering clinical research, assessment methods, and treatment innovations. Additionally, the organization offers guidance and support for students and early career psychologists, hosts annual meetings and professional workshops, and promotes knowledge exchange and professional networking in the field of clinical psychology. For clinical psychology practitioners, researchers, and students, this is an important platform for accessing professional resources and development opportunities.',
            tags: ['临床心理学', '专业组织', '实践指南', '循证治疗', '专业发展'],
            tags_en: ['Clinical Psychology', 'Professional Organization', 'Practice Guidelines', 'Evidence-based Treatment', 'Professional Development'],
            targetAudience: [
                '临床心理学家 - 获取实践指南和专业资源',
                '心理健康从业者 - 了解循证治疗方法',
                '临床心理学研究者 - 获取最新研究动态',
                '心理学专业学生 - 寻找职业发展资源',
                '心理健康机构 - 获取专业标准和指南'
            ],
            targetAudience_en: [
                'Clinical psychologists - Accessing practice guidelines and professional resources',
                'Mental health practitioners - Learning about evidence-based treatment methods',
                'Clinical psychology researchers - Getting the latest research updates',
                'Psychology students - Finding career development resources',
                'Mental health institutions - Obtaining professional standards and guidelines'
            ],
            relatedResources: [
                {name: 'APA Division 17 - Counseling Psychology', id: 'apadiv17'},
                {name: 'Society for Psychotherapy Research (SPR)', id: 'spr'},
                {name: 'American Board of Professional Psychology', id: 'abpp'}
            ]
        },
        'apadiv17': {
            id: 'apadiv17',
            name: 'APA Division 17 - Society of Counseling Psychology',
            logo: 'https://www.div17.org/wp-content/uploads/2018/12/div17-logo-1.png',
            url: 'https://www.div17.org/',
            shortDescription: 'APA咨询心理学分会，促进咨询心理学的研究与实践。',
            shortDescription_en: 'APA Division of Counseling Psychology, promoting research and practice in counseling psychology.',
            fullDescription: 'APA第17分会（咨询心理学会）是美国心理学会下属的专业组织，致力于促进咨询心理学的科学、实践和社会正义。该分会关注个人优势和资源的发展，强调多元文化视角和预防工作。其网站提供咨询心理学最新研究、实践指南和专业发展资源，包括多元文化咨询、职业发展咨询、健康心理学咨询等领域的专业知识。分会发布《咨询心理学家》期刊，涵盖理论创新、实证研究和实践应用。此外，该组织还提供学生和早期职业心理学家的指导和支持，举办年度会议和专业研讨会，促进咨询心理学领域的知识交流和专业网络建设。对于咨询心理学从业者、研究人员和学生，这是一个获取专业资源和发展机会的重要平台。',
            fullDescription_en: 'APA Division 17 (Society of Counseling Psychology) is a professional organization under the American Psychological Association dedicated to advancing the science, practice, and social justice of counseling psychology. The division focuses on the development of individual strengths and resources, emphasizing multicultural perspectives and preventive work. Its website provides the latest research, practice guidelines, and professional development resources in counseling psychology, including professional knowledge in multicultural counseling, career development counseling, and health psychology counseling. The division publishes the journal "The Counseling Psychologist," covering theoretical innovations, empirical research, and practical applications. Additionally, the organization offers guidance and support for students and early career psychologists, hosts annual meetings and professional workshops, and promotes knowledge exchange and professional networking in the field of counseling psychology. For counseling psychology practitioners, researchers, and students, this is an important platform for accessing professional resources and development opportunities.',
            tags: ['咨询心理学', '专业组织', '多元文化咨询', '职业发展', '社会正义'],
            tags_en: ['Counseling Psychology', 'Professional Organization', 'Multicultural Counseling', 'Career Development', 'Social Justice'],
            targetAudience: [
                '咨询心理学家 - 获取专业资源和指南',
                '心理咨询师 - 了解最新咨询方法和理论',
                '咨询心理学研究者 - 获取研究动态',
                '心理学专业学生 - 寻找职业发展路径',
                '多元文化咨询从业者 - 获取专业知识'
            ],
            targetAudience_en: [
                'Counseling psychologists - Accessing professional resources and guidelines',
                'Psychological counselors - Learning about the latest counseling methods and theories',
                'Counseling psychology researchers - Getting research updates',
                'Psychology students - Finding career development paths',
                'Multicultural counseling practitioners - Obtaining professional knowledge'
            ],
            relatedResources: [
                {name: 'APA Division 12 - Clinical Psychology', id: 'apadiv12'},
                {name: 'Society for Psychotherapy Research (SPR)', id: 'spr'},
                {name: 'National Career Development Association', id: 'ncda'}
            ]
        },
        'spr': {
            id: 'spr',
            name: 'Society for Psychotherapy Research (SPR)',
            logo: 'https://www.psychotherapyresearch.org/resource/resmgr/images/SPR_Logo_2019.png',
            url: 'https://www.psychotherapyresearch.org/',
            shortDescription: '心理治疗研究学会，促进心理治疗效果研究。',
            shortDescription_en: 'Society for Psychotherapy Research, promoting research on psychotherapy effectiveness.',
            fullDescription: 'SPR（心理治疗研究学会）是一个国际性学术组织，致力于促进心理治疗过程和结果的科学研究。该学会汇集了来自不同理论取向的研究者和临床医生，共同探索心理治疗的有效机制和改进方法。其网站提供心理治疗研究的最新进展、方法论资源和研究工具，包括治疗过程测量、结果评估和质性研究方法等内容。学会出版《心理治疗研究杂志》，是该领域的权威期刊。此外，SPR还组织国际和区域性会议，促进研究者之间的合作和交流，支持新兴研究者的发展，并推动研究成果向临床实践的转化。对于心理治疗研究者、临床心理学家和精神健康专业人员，SPR提供了一个重要的平台，用于分享研究发现、方法创新和临床应用。',
            fullDescription_en: 'SPR (Society for Psychotherapy Research) is an international academic organization dedicated to promoting scientific research on psychotherapy processes and outcomes. The society brings together researchers and clinicians from different theoretical orientations to explore effective mechanisms and improvement methods for psychotherapy. Its website provides the latest developments in psychotherapy research, methodological resources, and research tools, including treatment process measurement, outcome assessment, and qualitative research methods. The society publishes the Journal of Psychotherapy Research, an authoritative journal in the field. Additionally, SPR organizes international and regional conferences, promotes collaboration and exchange among researchers, supports the development of emerging researchers, and promotes the translation of research findings into clinical practice. For psychotherapy researchers, clinical psychologists, and mental health professionals, SPR provides an important platform for sharing research findings, methodological innovations, and clinical applications.',
            tags: ['心理治疗研究', '国际组织', '治疗效果', '研究方法', '临床应用'],
            tags_en: ['Psychotherapy Research', 'International Organization', 'Treatment Effectiveness', 'Research Methods', 'Clinical Applications'],
            targetAudience: [
                '心理治疗研究者 - 获取研究方法和资源',
                '临床心理学家 - 了解循证治疗研究',
                '心理咨询师 - 获取治疗效果评估工具',
                '精神健康专业人员 - 了解治疗过程研究',
                '心理学专业学生 - 学习研究方法和应用'
            ],
            targetAudience_en: [
                'Psychotherapy researchers - Accessing research methods and resources',
                'Clinical psychologists - Learning about evidence-based treatment research',
                'Psychological counselors - Obtaining treatment effectiveness assessment tools',
                'Mental health professionals - Understanding treatment process research',
                'Psychology students - Learning research methods and applications'
            ],
            relatedResources: [
                {name: 'APA Division 12 - Clinical Psychology', id: 'apadiv12'},
                {name: 'APA Division 17 - Counseling Psychology', id: 'apadiv17'},
                {name: 'Psychotherapy Networker', id: 'psychnetworker'}
            ]
        },
        'abpp': {
            id: 'abpp',
            name: 'American Board of Professional Psychology',
            logo: 'https://www.abpp.org/assets/images/logo.png',
            url: 'https://www.abpp.org/',
            shortDescription: '美国专业心理学委员会，提供临床心理学专业认证。',
            shortDescription_en: 'American Board of Professional Psychology, providing clinical psychology professional certification.',
            fullDescription: 'ABPP（美国专业心理学委员会）是美国最权威的心理学专业认证机构，负责评估和认证专业心理学家的能力和专业水平。该组织提供多个专业领域的认证，包括临床心理学、咨询心理学、神经心理学、法医心理学等。ABPP认证被广泛认为是心理学专业实践的黄金标准，代表着专业人员达到了高水平的能力和专业知识。其网站提供认证申请信息、考试准备资源、继续教育机会以及已认证专业人员名录。对于寻求专业发展和认可的心理学家，ABPP认证是一个重要的职业里程碑，能够增强专业信誉，拓展职业机会，并确保为公众提供高质量的心理健康服务。',
            fullDescription_en: 'ABPP (American Board of Professional Psychology) is the most authoritative professional certification body for psychology in the United States, responsible for evaluating and certifying the competence and professional level of professional psychologists. The organization provides certification in multiple specialty areas, including clinical psychology, counseling psychology, neuropsychology, forensic psychology, and more. ABPP certification is widely regarded as the gold standard for professional practice in psychology, representing that professionals have achieved a high level of competence and expertise. Its website provides certification application information, exam preparation resources, continuing education opportunities, and a directory of certified professionals. For psychologists seeking professional development and recognition, ABPP certification is an important career milestone that can enhance professional credibility, expand career opportunities, and ensure the provision of high-quality mental health services to the public.',
            tags: ['专业认证', '临床心理学', '咨询心理学', '专业标准', '继续教育'],
            tags_en: ['Professional Certification', 'Clinical Psychology', 'Counseling Psychology', 'Professional Standards', 'Continuing Education'],
            targetAudience: [
                '临床心理学家 - 获取专业认证',
                '咨询心理学家 - 提升专业资质',
                '神经心理学家 - 获得专业认可',
                '心理健康机构 - 评估专业人员资质',
                '心理学专业学生 - 了解职业发展路径'
            ],
            targetAudience_en: [
                'Clinical psychologists - Obtaining professional certification',
                'Counseling psychologists - Enhancing professional qualifications',
                'Neuropsychologists - Gaining professional recognition',
                'Mental health institutions - Evaluating professional qualifications',
                'Psychology students - Understanding career development paths'
            ],
            relatedResources: [
                {name: 'APA Division 12 - Clinical Psychology', id: 'apadiv12'},
                {name: 'APA Division 17 - Counseling Psychology', id: 'apadiv17'},
                {name: 'American Psychological Association', id: 'apa'}
            ]
        },
        'psychnetworker': {
            id: 'psychnetworker',
            name: 'Psychotherapy Networker',
            logo: 'https://psychotherapynetworker.org/assets/img/logo.png',
            url: 'https://www.psychotherapynetworker.org/',
            shortDescription: '心理治疗网络者，提供实用的临床资源和继续教育。',
            shortDescription_en: 'Psychotherapy Networker, providing practical clinical resources and continuing education.',
            fullDescription: '心理治疗网络者是一个面向心理健康专业人员的重要资源平台，提供实用的临床技能、创新治疗方法和专业发展资源。该网站发布《心理治疗网络者》杂志，内容涵盖各种心理治疗取向、案例分析、临床技巧和最新研究应用。平台特别注重将理论与实践相结合，提供大量的实用工具、治疗技术演示和案例讨论，帮助临床工作者提升治疗效果。此外，该网站还提供丰富的继续教育课程、网络研讨会和年度专业会议，使心理健康专业人员能够不断更新知识和技能。对于临床心理学家、心理咨询师、社会工作者和其他心理健康从业者，这是一个获取实用临床资源、专业交流和职业发展的综合平台。',
            fullDescription_en: 'Psychotherapy Networker is an important resource platform for mental health professionals, providing practical clinical skills, innovative treatment methods, and professional development resources. The website publishes the "Psychotherapy Networker" magazine, covering various psychotherapy orientations, case analyses, clinical techniques, and applications of the latest research. The platform particularly emphasizes the integration of theory and practice, providing a wealth of practical tools, therapy technique demonstrations, and case discussions to help clinicians enhance treatment effectiveness. Additionally, the website offers rich continuing education courses, webinars, and annual professional conferences, enabling mental health professionals to continuously update their knowledge and skills. For clinical psychologists, psychological counselors, social workers, and other mental health practitioners, this is a comprehensive platform for obtaining practical clinical resources, professional exchange, and career development.',
            tags: ['心理治疗', '临床实践', '继续教育', '专业发展', '案例分析'],
            tags_en: ['Psychotherapy', 'Clinical Practice', 'Continuing Education', 'Professional Development', 'Case Analysis'],
            targetAudience: [
                '心理治疗师 - 获取实用临床技巧',
                '临床心理学家 - 学习创新治疗方法',
                '心理咨询师 - 获取案例分析和讨论',
                '社会工作者 - 参与继续教育课程',
                '精神健康专业人员 - 获取专业发展资源'
            ],
            targetAudience_en: [
                'Psychotherapists - Obtaining practical clinical techniques',
                'Clinical psychologists - Learning innovative treatment methods',
                'Psychological counselors - Accessing case analyses and discussions',
                'Social workers - Participating in continuing education courses',
                'Mental health professionals - Obtaining professional development resources'
            ],
            relatedResources: [
                {name: 'Society for Psychotherapy Research (SPR)', id: 'spr'},
                {name: 'APA Division 12 - Clinical Psychology', id: 'apadiv12'},
                {name: 'APA Division 17 - Counseling Psychology', id: 'apadiv17'}
            ]
        },
        
        // 2.3.4 社会心理学
        'spsp': {
            id: 'spsp',
            name: 'Society for Personality and Social Psychology',
            logo: 'https://spsp.org/sites/default/files/spsp-logo.png',
            url: 'https://www.spsp.org/',
            shortDescription: '人格与社会心理学学会，促进社会心理学研究与应用。',
            shortDescription_en: 'Society for Personality and Social Psychology, promoting social psychology research and applications.',
            fullDescription: 'SPSP（人格与社会心理学学会）是世界上最大的社会和人格心理学专业组织，致力于促进这一领域的科学研究、教育和应用。该学会汇集了来自世界各地的研究者、教育者和学生，共同探索人类社会行为和个体差异的基本原理。其网站提供丰富的研究资源，包括最新研究动态、方法论指南、数据共享平台和研究工具。学会出版多种学术期刊，如《人格与社会心理学杂志》和《社会与人格心理学评论》，是该领域的权威出版物。此外，SPSP还组织年度会议和专题研讨会，提供研究基金和奖学金，支持早期职业研究者的发展，并促进研究成果向公共政策和实践应用的转化。对于社会心理学研究者、教育工作者和学生，SPSP提供了一个重要的平台，用于学术交流、专业发展和研究合作。',
            fullDescription_en: 'SPSP (Society for Personality and Social Psychology) is the world\'s largest professional organization for social and personality psychology, dedicated to promoting scientific research, education, and application in this field. The society brings together researchers, educators, and students from around the world to explore the fundamental principles of human social behavior and individual differences. Its website provides rich research resources, including the latest research developments, methodological guidelines, data sharing platforms, and research tools. The society publishes multiple academic journals, such as the Journal of Personality and Social Psychology and Social and Personality Psychology Review, which are authoritative publications in the field. Additionally, SPSP organizes annual meetings and specialized workshops, provides research funding and scholarships, supports the development of early career researchers, and promotes the translation of research findings into public policy and practical applications. For social psychology researchers, educators, and students, SPSP provides an important platform for academic exchange, professional development, and research collaboration.',
            tags: ['社会心理学', '人格心理学', '学术组织', '研究资源', '专业发展'],
            tags_en: ['Social Psychology', 'Personality Psychology', 'Academic Organization', 'Research Resources', 'Professional Development'],
            targetAudience: [
                '社会心理学研究者 - 获取研究资源和合作机会',
                '人格心理学家 - 了解最新研究动态',
                '心理学教育工作者 - 获取教学资源',
                '心理学专业学生 - 寻找研究机会和指导',
                '应用心理学从业者 - 了解研究的实践应用'
            ],
            targetAudience_en: [
                'Social psychology researchers - Accessing research resources and collaboration opportunities',
                'Personality psychologists - Learning about the latest research developments',
                'Psychology educators - Obtaining teaching resources',
                'Psychology students - Finding research opportunities and guidance',
                'Applied psychology practitioners - Understanding practical applications of research'
            ],
            relatedResources: [
                {name: 'European Association of Social Psychology', id: 'easp'},
                {name: 'International Association for Relationship Research', id: 'iarr'},
                {name: 'Association for Psychological Science', id: 'aps'}
            ]
        },
        'easp': {
            id: 'easp',
            name: 'European Association of Social Psychology',
            logo: 'https://www.easp.eu/images/easp-logo.png',
            url: 'https://www.easp.eu/',
            shortDescription: '欧洲社会心理学协会，促进欧洲社会心理学研究与交流。',
            shortDescription_en: 'European Association of Social Psychology, promoting social psychology research and exchange in Europe.',
            fullDescription: 'EASP（欧洲社会心理学协会）是欧洲地区最具影响力的社会心理学专业组织，致力于促进社会心理学的科学研究和国际合作。该协会汇集了欧洲及世界各地的社会心理学研究者，提供学术交流和合作的平台。其网站提供丰富的研究资源，包括研究基金信息、学术会议公告、研究方法指南和职业发展机会。协会出版《欧洲社会心理学杂志》，是该领域的重要学术期刊。此外，EASP还组织夏季学校、研讨会和小型会议，特别关注跨文化研究和国际合作，支持早期职业研究者和博士生的发展，并促进社会心理学研究在解决社会问题中的应用。对于欧洲及世界各地的社会心理学研究者、教育工作者和学生，EASP提供了一个重要的平台，用于学术交流、专业发展和国际合作。',
            fullDescription_en: 'EASP (European Association of Social Psychology) is the most influential professional organization for social psychology in the European region, dedicated to promoting scientific research and international cooperation in social psychology. The association brings together social psychology researchers from Europe and around the world, providing a platform for academic exchange and collaboration. Its website provides rich research resources, including research funding information, academic conference announcements, research methodology guidelines, and career development opportunities. The association publishes the European Journal of Social Psychology, an important academic journal in the field. Additionally, EASP organizes summer schools, workshops, and small conferences, with a special focus on cross-cultural research and international cooperation, supporting the development of early career researchers and doctoral students, and promoting the application of social psychology research in addressing social issues. For social psychology researchers, educators, and students in Europe and around the world, EASP provides an important platform for academic exchange, professional development, and international collaboration.',
            tags: ['社会心理学', '欧洲研究', '跨文化研究', '国际合作', '学术交流'],
            tags_en: ['Social Psychology', 'European Research', 'Cross-cultural Research', 'International Collaboration', 'Academic Exchange'],
            targetAudience: [
                '欧洲社会心理学研究者 - 获取研究资源和合作机会',
                '跨文化研究者 - 参与国际合作项目',
                '社会心理学博士生 - 参加夏季学校和培训',
                '早期职业研究者 - 获取研究基金和支持',
                '社会心理学教育工作者 - 获取教学资源'
            ],
            targetAudience_en: [
                'European social psychology researchers - Accessing research resources and collaboration opportunities',
                'Cross-cultural researchers - Participating in international collaboration projects',
                'Social psychology doctoral students - Attending summer schools and training',
                'Early career researchers - Obtaining research funding and support',
                'Social psychology educators - Accessing teaching resources'
            ],
            relatedResources: [
                {name: 'Society for Personality and Social Psychology', id: 'spsp'},
                {name: 'International Association for Relationship Research', id: 'iarr'},
                {name: 'Association for Psychological Science', id: 'aps'}
            ]
        },
        'iarr': {
            id: 'iarr',
            name: 'International Association for Relationship Research',
            logo: 'https://www.iarr.org/images/iarr-logo.png',
            url: 'https://www.iarr.org/',
            shortDescription: '国际关系研究协会，专注于人际关系的跨学科研究。',
            shortDescription_en: 'International Association for Relationship Research, focusing on interdisciplinary research on interpersonal relationships.',
            fullDescription: 'IARR（国际关系研究协会）是一个跨学科的专业组织，致力于促进人际关系各方面的科学研究。该协会汇集了来自心理学、社会学、家庭研究、通信学和其他相关领域的研究者，共同探索人际关系的形成、维持、发展和解体的过程。其网站提供丰富的研究资源，包括关系研究的最新进展、方法论指南、数据共享平台和研究工具。协会出版《个人关系杂志》和《社会与个人关系》等期刊，是该领域的权威出版物。此外，IARR还组织国际会议和专题研讨会，提供研究基金和奖学金，支持早期职业研究者的发展，并促进研究成果向实践应用的转化，如关系教育、夫妻治疗和家庭干预。对于关系研究者、临床工作者和学生，IARR提供了一个重要的平台，用于学术交流、专业发展和跨学科合作。',
            fullDescription_en: 'IARR (International Association for Relationship Research) is an interdisciplinary professional organization dedicated to promoting scientific research on all aspects of interpersonal relationships. The association brings together researchers from psychology, sociology, family studies, communication, and other related fields to explore the processes of formation, maintenance, development, and dissolution of interpersonal relationships. Its website provides rich research resources, including the latest developments in relationship research, methodological guidelines, data sharing platforms, and research tools. The association publishes journals such as the Journal of Personal Relationships and Social and Personal Relationships, which are authoritative publications in the field. Additionally, IARR organizes international conferences and specialized workshops, provides research funding and scholarships, supports the development of early career researchers, and promotes the translation of research findings into practical applications, such as relationship education, couple therapy, and family interventions. For relationship researchers, clinical practitioners, and students, IARR provides an important platform for academic exchange, professional development, and interdisciplinary collaboration.',
            tags: ['人际关系', '跨学科研究', '亲密关系', '家庭研究', '关系干预'],
            tags_en: ['Interpersonal Relationships', 'Interdisciplinary Research', 'Intimate Relationships', 'Family Studies', 'Relationship Interventions'],
            targetAudience: [
                '关系研究者 - 获取研究资源和合作机会',
                '社会心理学家 - 了解人际关系研究',
                '家庭治疗师 - 获取关系干预研究',
                '婚姻咨询师 - 了解亲密关系动态',
                '跨学科研究者 - 参与跨领域合作'
            ],
            targetAudience_en: [
                'Relationship researchers - Accessing research resources and collaboration opportunities',
                'Social psychologists - Learning about interpersonal relationship research',
                'Family therapists - Obtaining relationship intervention research',
                'Marriage counselors - Understanding intimate relationship dynamics',
                'Interdisciplinary researchers - Participating in cross-field collaboration'
            ],
            relatedResources: [
                {name: 'Society for Personality and Social Psychology', id: 'spsp'},
                {name: 'National Council on Family Relations', id: 'ncfr'},
                {name: 'European Association of Social Psychology', id: 'easp'}
            ]
        },
        'aps': {
            id: 'aps',
            name: 'Association for Psychological Science',
            logo: 'https://www.psychologicalscience.org/redesign/wp-content/uploads/2018/11/aps-logo.png',
            url: 'https://www.psychologicalscience.org/',
            shortDescription: '心理科学协会，促进心理学科学研究与应用。',
            shortDescription_en: 'Association for Psychological Science, promoting scientific research and applications in psychology.',
            fullDescription: 'APS（心理科学协会）是一个国际性学术组织，致力于促进心理学作为科学的发展和应用。该协会强调心理学的科学基础，支持基于证据的研究和实践。其网站提供丰富的研究资源，包括最新研究动态、方法论指南、开放科学实践和研究工具。协会出版多种学术期刊，如《心理科学》、《当代心理科学》和《心理科学进展》，是该领域的权威出版物。此外，APS还组织年度会议和专题研讨会，提供研究基金和奖学金，支持早期职业研究者的发展，并促进心理学研究在教育、健康、工作场所和公共政策中的应用。对于心理学研究者、教育工作者和学生，APS提供了一个重要的平台，用于学术交流、专业发展和跨领域合作，特别关注心理学的科学完整性和研究方法的改进。',
            fullDescription_en: 'APS (Association for Psychological Science) is an international academic organization dedicated to promoting the development and application of psychology as a science. The association emphasizes the scientific foundation of psychology, supporting evidence-based research and practice. Its website provides rich research resources, including the latest research developments, methodological guidelines, open science practices, and research tools. The association publishes multiple academic journals, such as Psychological Science, Current Directions in Psychological Science, and Advances in Psychological Science, which are authoritative publications in the field. Additionally, APS organizes annual meetings and specialized workshops, provides research funding and scholarships, supports the development of early career researchers, and promotes the application of psychological research in education, health, the workplace, and public policy. For psychology researchers, educators, and students, APS provides an important platform for academic exchange, professional development, and cross-disciplinary collaboration, with a special focus on scientific integrity in psychology and the improvement of research methods.',
            tags: ['心理科学', '科学研究', '开放科学', '研究方法', '跨领域应用'],
            tags_en: ['Psychological Science', 'Scientific Research', 'Open Science', 'Research Methods', 'Cross-disciplinary Applications'],
            targetAudience: [
                '心理学研究者 - 获取研究资源和方法指南',
                '心理学教育工作者 - 获取教学资源',
                '心理学专业学生 - 了解科学研究方法',
                '应用心理学从业者 - 获取循证实践指南',
                '跨学科研究者 - 参与心理学跨领域合作'
            ],
            targetAudience_en: [
                'Psychology researchers - Accessing research resources and methodological guidelines',
                'Psychology educators - Obtaining teaching resources',
                'Psychology students - Learning scientific research methods',
                'Applied psychology practitioners - Obtaining evidence-based practice guidelines',
                'Interdisciplinary researchers - Participating in cross-disciplinary collaboration in psychology'
            ],
            relatedResources: [
                {name: 'Society for Personality and Social Psychology', id: 'spsp'},
                {name: 'European Association of Social Psychology', id: 'easp'},
                {name: 'American Psychological Association', id: 'apa'}
            ]
        },
        'ncfr': {
            id: 'ncfr',
            name: 'National Council on Family Relations',
            logo: 'https://www.ncfr.org/sites/default/files/ncfr-logo.png',
            url: 'https://www.ncfr.org/',
            shortDescription: '国家家庭关系委员会，促进家庭研究与实践。',
            shortDescription_en: 'National Council on Family Relations, promoting family research and practice.',
            fullDescription: 'NCFR（国家家庭关系委员会）是一个多学科的专业组织，致力于促进家庭研究、理论和实践的发展。该组织汇集了来自家庭研究、社会学、心理学、人类发展、家庭治疗和家庭教育等领域的专业人员，共同探索家庭关系的各个方面。其网站提供丰富的研究资源，包括家庭研究的最新进展、政策简报、教育材料和专业发展机会。NCFR出版多种学术期刊，如《家庭关系杂志》和《婚姻与家庭杂志》，是该领域的权威出版物。此外，该组织还提供专业认证项目，如认证家庭生活教育者（CFLE）认证，组织年度会议和专题研讨会，支持家庭政策的发展，并促进研究成果向实践应用的转化。对于家庭研究者、教育工作者、治疗师和政策制定者，NCFR提供了一个重要的平台，用于学术交流、专业发展和跨学科合作，致力于增强家庭福祉和社会功能。',
            fullDescription_en: 'NCFR (National Council on Family Relations) is a multidisciplinary professional organization dedicated to promoting the development of family research, theory, and practice. The organization brings together professionals from family studies, sociology, psychology, human development, family therapy, and family education to explore various aspects of family relationships. Its website provides rich research resources, including the latest developments in family research, policy briefs, educational materials, and professional development opportunities. NCFR publishes multiple academic journals, such as the Journal of Family Relations and the Journal of Marriage and Family, which are authoritative publications in the field. Additionally, the organization offers professional certification programs, such as the Certified Family Life Educator (CFLE) certification, organizes annual meetings and specialized workshops, supports the development of family policies, and promotes the translation of research findings into practical applications. For family researchers, educators, therapists, and policy makers, NCFR provides an important platform for academic exchange, professional development, and interdisciplinary collaboration, dedicated to enhancing family well-being and social functioning.',
            tags: ['家庭研究', '家庭关系', '家庭教育', '家庭政策', '专业认证'],
            tags_en: ['Family Studies', 'Family Relationships', 'Family Education', 'Family Policy', 'Professional Certification'],
            targetAudience: [
                '家庭研究者 - 获取研究资源和合作机会',
                '家庭生活教育者 - 获取教育材料和认证',
                '家庭治疗师 - 了解家庭关系研究',
                '社会工作者 - 获取家庭干预资源',
                '政策制定者 - 了解家庭政策研究'
            ],
            targetAudience_en: [
                'Family researchers - Accessing research resources and collaboration opportunities',
                'Family life educators - Obtaining educational materials and certification',
                'Family therapists - Learning about family relationship research',
                'Social workers - Obtaining family intervention resources',
                'Policy makers - Learning about family policy research'
            ],
            relatedResources: [
                {name: 'International Association for Relationship Research', id: 'iarr'},
                {name: 'Society for Personality and Social Psychology', id: 'spsp'},
                {name: 'American Association for Marriage and Family Therapy', id: 'aamft'}
            ]
        },
        
        // 2.3.5 教育心理学
        'aera': {
            id: 'aera',
            name: 'American Educational Research Association',
            logo: 'https://www.aera.net/Portals/38/images/About_AERA/AERA_Logo.png',
            url: 'https://www.aera.net/',
            shortDescription: '美国教育研究协会，促进教育研究与实践。',
            shortDescription_en: 'American Educational Research Association, promoting educational research and practice.',
            fullDescription: 'AERA（美国教育研究协会）是世界上最大的教育研究专业组织，致力于促进教育研究的科学性和应用性。该协会汇集了来自各个学科的教育研究者、政策制定者、教育工作者和学生，共同探索教育过程和实践的各个方面。其网站提供丰富的研究资源，包括教育研究的最新进展、方法论指南、政策简报和专业发展机会。协会出版多种学术期刊，如《美国教育研究杂志》和《教育研究者》，是该领域的权威出版物。此外，AERA还组织年度会议和专题研讨会，提供研究基金和奖学金，支持教育政策的发展，并促进研究成果向教育实践的转化。对于教育研究者、教育工作者、政策制定者和学生，AERA提供了一个重要的平台，用于学术交流、专业发展和跨学科合作，致力于通过研究改善教育实践和政策。',
            fullDescription_en: 'AERA (American Educational Research Association) is the world\'s largest professional organization for educational research, dedicated to promoting the scientific and practical aspects of educational research. The association brings together education researchers, policy makers, educators, and students from various disciplines to explore different aspects of educational processes and practices. Its website provides rich research resources, including the latest developments in educational research, methodological guidelines, policy briefs, and professional development opportunities. The association publishes multiple academic journals, such as the American Educational Research Journal and Educational Researcher, which are authoritative publications in the field. Additionally, AERA organizes annual meetings and specialized workshops, provides research funding and scholarships, supports the development of educational policies, and promotes the translation of research findings into educational practice. For education researchers, educators, policy makers, and students, AERA provides an important platform for academic exchange, professional development, and interdisciplinary collaboration, dedicated to improving educational practice and policy through research.',
            tags: ['教育研究', '教育政策', '教育实践', '学术组织', '专业发展'],
            tags_en: ['Educational Research', 'Educational Policy', 'Educational Practice', 'Academic Organization', 'Professional Development'],
            targetAudience: [
                '教育研究者 - 获取研究资源和合作机会',
                '教育政策制定者 - 了解研究支持的政策',
                '教育工作者 - 获取基于研究的实践指南',
                '教育心理学家 - 了解学习和发展研究',
                '教育专业学生 - 获取研究方法培训'
            ],
            targetAudience_en: [
                'Education researchers - Accessing research resources and collaboration opportunities',
                'Education policy makers - Learning about research-supported policies',
                'Educators - Obtaining research-based practice guidelines',
                'Educational psychologists - Learning about learning and development research',
                'Education students - Obtaining research methodology training'
            ],
            relatedResources: [
                {name: 'APA Division 15 - Educational Psychology', id: 'apadiv15'},
                {name: 'European Association for Research on Learning and Instruction', id: 'earli'},
                {name: 'International Society of the Learning Sciences', id: 'isls'}
            ]
        },
        'apadiv15': {
            id: 'apadiv15',
            name: 'APA Division 15 - Educational Psychology',
            logo: 'https://apadiv15.org/wp-content/uploads/2019/01/div15logo.png',
            url: 'https://apadiv15.org/',
            shortDescription: 'APA教育心理学分会，促进教育心理学研究与应用。',
            shortDescription_en: 'APA Division of Educational Psychology, promoting research and applications in educational psychology.',
            fullDescription: 'APA第15分会（教育心理学分会）是美国心理学会下属的专业组织，致力于促进教育心理学的科学研究、理论发展和实践应用。该分会关注学习、动机、教学、评估和教育环境等方面的心理学研究，旨在增进对教育过程的理解并改善教育实践。其网站提供丰富的研究资源，包括教育心理学的最新进展、研究方法指南、教学资源和专业发展机会。分会出版《教育心理学家》期刊，是该领域的权威出版物。此外，该组织还提供研究基金和奖学金，组织专业会议和研讨会，支持早期职业研究者的发展，并促进研究成果向教育实践的转化。对于教育心理学研究者、教育工作者、学校心理学家和学生，APA第15分会提供了一个重要的平台，用于学术交流、专业发展和跨学科合作，致力于通过心理学研究改善教育效果。',
            fullDescription_en: 'APA Division 15 (Educational Psychology Division) is a professional organization under the American Psychological Association dedicated to promoting scientific research, theoretical development, and practical applications in educational psychology. The division focuses on psychological research in learning, motivation, teaching, assessment, and educational environments, aiming to enhance understanding of educational processes and improve educational practices. Its website provides rich research resources, including the latest developments in educational psychology, research methodology guidelines, teaching resources, and professional development opportunities. The division publishes the journal Educational Psychologist, an authoritative publication in the field. Additionally, the organization provides research funding and scholarships, organizes professional conferences and workshops, supports the development of early career researchers, and promotes the translation of research findings into educational practice. For educational psychology researchers, educators, school psychologists, and students, APA Division 15 provides an important platform for academic exchange, professional development, and interdisciplinary collaboration, dedicated to improving educational outcomes through psychological research.',
            tags: ['教育心理学', '学习理论', '教学策略', '动机研究', '教育评估'],
            tags_en: ['Educational Psychology', 'Learning Theory', 'Teaching Strategies', 'Motivation Research', 'Educational Assessment'],
            targetAudience: [
                '教育心理学研究者 - 获取研究资源和合作机会',
                '教育工作者 - 了解学习和教学的心理学基础',
                '学校心理学家 - 获取教育干预资源',
                '课程开发人员 - 了解学习理论应用',
                '教育专业学生 - 获取研究和实践指导'
            ],
            targetAudience_en: [
                'Educational psychology researchers - Accessing research resources and collaboration opportunities',
                'Educators - Understanding the psychological foundations of learning and teaching',
                'School psychologists - Obtaining educational intervention resources',
                'Curriculum developers - Learning about applications of learning theories',
                'Education students - Obtaining research and practice guidance'
            ],
            relatedResources: [
                {name: 'American Educational Research Association', id: 'aera'},
                {name: 'European Association for Research on Learning and Instruction', id: 'earli'},
                {name: 'International Society of the Learning Sciences', id: 'isls'}
            ]
        },
        'earli': {
            id: 'earli',
            name: 'European Association for Research on Learning and Instruction',
            logo: 'https://www.earli.org/sites/default/files/earli-logo.png',
            url: 'https://www.earli.org/',
            shortDescription: '欧洲学习与教学研究协会，促进学习科学研究。',
            shortDescription_en: 'European Association for Research on Learning and Instruction, promoting research in learning sciences.',
            fullDescription: 'EARLI（欧洲学习与教学研究协会）是欧洲地区最具影响力的学习和教学研究专业组织，致力于促进学习科学和教学研究的发展。该协会汇集了来自心理学、教育学、认知科学和相关领域的研究者，共同探索学习过程、教学方法和教育环境的各个方面。其网站提供丰富的研究资源，包括学习研究的最新进展、方法论指南、教学资源和专业发展机会。协会出版多种学术期刊，如《学习与教学》和《教育研究评论》，是该领域的权威出版物。此外，EARLI还组织双年会和专题研讨会，设有多个特殊兴趣小组（SIGs），支持早期职业研究者的发展，并促进研究成果向教育实践的转化。对于学习科学研究者、教育工作者和学生，EARLI提供了一个重要的平台，用于学术交流、专业发展和国际合作，特别关注跨文化研究和国际比较。',
            fullDescription_en: 'EARLI (European Association for Research on Learning and Instruction) is the most influential professional organization for learning and teaching research in the European region, dedicated to promoting the development of learning sciences and instructional research. The association brings together researchers from psychology, education, cognitive science, and related fields to explore various aspects of learning processes, teaching methods, and educational environments. Its website provides rich research resources, including the latest developments in learning research, methodological guidelines, teaching resources, and professional development opportunities. The association publishes multiple academic journals, such as Learning and Instruction and Educational Research Review, which are authoritative publications in the field. Additionally, EARLI organizes biennial conferences and specialized workshops, has multiple Special Interest Groups (SIGs), supports the development of early career researchers, and promotes the translation of research findings into educational practice. For learning science researchers, educators, and students, EARLI provides an important platform for academic exchange, professional development, and international collaboration, with a special focus on cross-cultural research and international comparisons.',
            tags: ['学习研究', '教学研究', '欧洲研究', '跨文化研究', '教育创新'],
            tags_en: ['Learning Research', 'Instructional Research', 'European Research', 'Cross-cultural Research', 'Educational Innovation'],
            targetAudience: [
                '学习科学研究者 - 获取研究资源和合作机会',
                '教育心理学家 - 了解学习过程研究',
                '教育工作者 - 获取基于研究的教学策略',
                '教育政策制定者 - 了解教育研究证据',
                '教育专业学生 - 参与研究社区和培训'
            ],
            targetAudience_en: [
                'Learning science researchers - Accessing research resources and collaboration opportunities',
                'Educational psychologists - Learning about learning process research',
                'Educators - Obtaining research-based teaching strategies',
                'Education policy makers - Understanding educational research evidence',
                'Education students - Participating in research communities and training'
            ],
            relatedResources: [
                {name: 'American Educational Research Association', id: 'aera'},
                {name: 'APA Division 15 - Educational Psychology', id: 'apadiv15'},
                {name: 'International Society of the Learning Sciences', id: 'isls'}
            ]
        },
        'isls': {
            id: 'isls',
            name: 'International Society of the Learning Sciences',
            logo: 'https://www.isls.org/wp-content/uploads/2019/05/isls-logo.png',
            url: 'https://www.isls.org/',
            shortDescription: '国际学习科学学会，促进学习科学的跨学科研究。',
            shortDescription_en: 'International Society of the Learning Sciences, promoting interdisciplinary research in learning sciences.',
            fullDescription: 'ISLS（国际学习科学学会）是一个致力于促进学习科学跨学科研究和实践的国际性组织。学习科学是一个相对年轻的领域，融合了认知科学、教育心理学、计算机科学、人类学和教育学等多个学科的视角，旨在深入理解学习过程并设计创新的学习环境。ISLS的网站提供丰富的研究资源，包括学习科学的最新进展、研究方法指南、设计框架和教育技术应用案例。学会出版《学习科学杂志》和《计算机支持的协作学习》等期刊，是该领域的权威出版物。此外，ISLS还组织国际会议，如学习科学国际会议（ICLS）和计算机支持的协作学习国际会议（CSCL），设立多个特殊兴趣小组，支持早期职业研究者的发展，并促进研究成果向教育实践的转化。对于学习科学研究者、教育技术开发者、教育工作者和政策制定者，ISLS提供了一个重要的平台，用于学术交流、专业发展和国际合作，特别关注技术增强学习和创新教育设计。',
            fullDescription_en: 'ISLS (International Society of the Learning Sciences) is an international organization dedicated to promoting interdisciplinary research and practice in the learning sciences. Learning sciences is a relatively young field that integrates perspectives from cognitive science, educational psychology, computer science, anthropology, and education, aiming to deeply understand learning processes and design innovative learning environments. The ISLS website provides rich research resources, including the latest developments in learning sciences, research methodology guidelines, design frameworks, and educational technology application cases. The society publishes journals such as the Journal of the Learning Sciences and Computer-Supported Collaborative Learning, which are authoritative publications in the field. Additionally, ISLS organizes international conferences, such as the International Conference of the Learning Sciences (ICLS) and the International Conference on Computer-Supported Collaborative Learning (CSCL), establishes multiple special interest groups, supports the development of early career researchers, and promotes the translation of research findings into educational practice. For learning sciences researchers, educational technology developers, educators, and policy makers, ISLS provides an important platform for academic exchange, professional development, and international collaboration, with a special focus on technology-enhanced learning and innovative educational design.',
            tags: ['学习科学', '教育技术', '跨学科研究', '设计研究', '协作学习'],
            tags_en: ['Learning Sciences', 'Educational Technology', 'Interdisciplinary Research', 'Design Research', 'Collaborative Learning'],
            targetAudience: [
                '学习科学研究者 - 获取研究资源和合作机会',
                '教育技术开发者 - 了解学习理论和设计框架',
                '教育工作者 - 获取创新教学方法',
                '教育政策制定者 - 了解学习环境设计研究',
                '教育专业学生 - 参与学习科学研究社区'
            ],
            targetAudience_en: [
                'Learning sciences researchers - Accessing research resources and collaboration opportunities',
                'Educational technology developers - Understanding learning theories and design frameworks',
                'Educators - Obtaining innovative teaching methods',
                'Education policy makers - Learning about learning environment design research',
                'Education students - Participating in learning sciences research communities'
            ],
            relatedResources: [
                {name: 'American Educational Research Association', id: 'aera'},
                {name: 'APA Division 15 - Educational Psychology', id: 'apadiv15'},
                {name: 'European Association for Research on Learning and Instruction', id: 'earli'},
                {name: 'Association for Educational Communications and Technology', id: 'aect'}
            ]
        },
        'aect': {
            id: 'aect',
            name: 'Association for Educational Communications and Technology',
            logo: 'https://www.aect.org/images/aect-logo.png',
            url: 'https://www.aect.org/',
            shortDescription: '教育传播与技术协会，促进教育技术研究与应用。',
            shortDescription_en: 'Association for Educational Communications and Technology, promoting research and applications in educational technology.',
            fullDescription: 'AECT（教育传播与技术协会）是一个国际性专业组织，致力于促进教育技术和教学设计领域的研究、发展和实践。该协会关注如何有效地利用技术和媒体来改善教学和学习过程，涵盖从K-12教育到高等教育和企业培训的各个层面。其网站提供丰富的研究资源，包括教育技术的最新进展、设计模型、评估工具和最佳实践案例。协会出版多种学术期刊，如《教育传播与技术研究与发展》和《教学设计季刊》，是该领域的权威出版物。此外，AECT还组织年度国际会议和专题研讨会，设立多个专业分部，如设计与开发、研究与理论、远程教育等，提供专业认证和奖项，支持早期职业研究者的发展，并促进研究成果向教育实践的转化。对于教育技术研究者、教学设计师、教育工作者和学生，AECT提供了一个重要的平台，用于学术交流、专业发展和国际合作，致力于通过技术创新提高教育质量和学习效果。',
            fullDescription_en: 'AECT (Association for Educational Communications and Technology) is an international professional organization dedicated to promoting research, development, and practice in the field of educational technology and instructional design. The association focuses on how to effectively utilize technology and media to improve teaching and learning processes, covering various levels from K-12 education to higher education and corporate training. Its website provides rich research resources, including the latest developments in educational technology, design models, evaluation tools, and best practice cases. The association publishes multiple academic journals, such as Educational Communication and Technology Research and Development and the Journal of Instructional Design, which are authoritative publications in the field. Additionally, AECT organizes annual international conferences and specialized workshops, establishes multiple professional divisions, such as Design and Development, Research and Theory, and Distance Education, provides professional certification and awards, supports the development of early career researchers, and promotes the translation of research findings into educational practice. For educational technology researchers, instructional designers, educators, and students, AECT provides an important platform for academic exchange, professional development, and international collaboration, dedicated to improving educational quality and learning outcomes through technological innovation.',
            tags: ['教育技术', '教学设计', '媒体应用', '远程教育', '技术整合'],
            tags_en: ['Educational Technology', 'Instructional Design', 'Media Applications', 'Distance Education', 'Technology Integration'],
            targetAudience: [
                '教育技术研究者 - 获取研究资源和合作机会',
                '教学设计师 - 获取设计模型和工具',
                '教育工作者 - 了解技术整合策略',
                '教育技术专业学生 - 获取专业发展资源',
                '教育管理者 - 了解教育技术实施策略'
            ],
            targetAudience_en: [
                'Educational technology researchers - Accessing research resources and collaboration opportunities',
                'Instructional designers - Obtaining design models and tools',
                'Educators - Learning about technology integration strategies',
                'Educational technology students - Obtaining professional development resources',
                'Education administrators - Learning about educational technology implementation strategies'
            ],
            relatedResources: [
                {name: 'International Society of the Learning Sciences', id: 'isls'},
                {name: 'American Educational Research Association', id: 'aera'},
                {name: 'APA Division 15 - Educational Psychology', id: 'apadiv15'},
                {name: 'European Association for Research on Learning and Instruction', id: 'earli'}
            ]
        },
        'maxplanck': {
            id: 'maxplanck',
            name: 'Max Planck Institute for Human Cognitive and Brain Sciences',
            logo: 'https://www.mpg.de/assets/mpg_logo-1a42a8c4c0e5b2c2c8b9a9e3a7a0e1a7c8a9a8c4c0e5b2c2c8b9a9e3a7a0e1a7.svg',
            url: 'https://www.cbs.mpg.de/en',
            shortDescription: '德国马普学会，认知神经科学权威研究机构。',
            shortDescription_en: 'German Max Planck Society, authoritative research institution for cognitive neuroscience.',
            fullDescription: 'Max Planck人类认知与脑科学研究所是德国马克斯·普朗克学会下属的一个世界顶级研究机构，专注于研究人类认知过程的神经基础。研究所汇集了来自神经科学、心理学、医学和物理学等多学科的科学家，采用先进的脑成像技术（如fMRI、MEG、EEG等）和行为实验方法，研究语言处理、决策制定、社会认知、情绪调节等认知功能的神经机制。研究所拥有世界一流的实验设备和计算资源，每年发表大量高影响力的研究论文。此外，研究所还提供博士和博士后培训项目，培养认知神经科学领域的下一代科学家。作为认知神经科学领域的领导者，该研究所的工作对理解人类思维和大脑功能有着重要贡献。',
            fullDescription_en: 'The Max Planck Institute for Human Cognitive and Brain Sciences is a world-leading research institution under the German Max Planck Society, focusing on the neural basis of human cognitive processes. The institute brings together scientists from multiple disciplines including neuroscience, psychology, medicine, and physics, using advanced brain imaging techniques (such as fMRI, MEG, EEG) and behavioral experimental methods to study the neural mechanisms of cognitive functions like language processing, decision-making, social cognition, and emotional regulation. The institute possesses world-class experimental equipment and computational resources, publishing numerous high-impact research papers annually. Additionally, the institute offers doctoral and postdoctoral training programs, nurturing the next generation of scientists in cognitive neuroscience. As a leader in the field of cognitive neuroscience, the institute\'s work makes significant contributions to understanding human thinking and brain function.',
            tags: ['认知神经科学', '研究机构', '脑成像', '多学科研究'],
            tags_en: ['Cognitive Neuroscience', 'Research Institution', 'Brain Imaging', 'Multidisciplinary Research'],
            targetAudience: [
                '认知神经科学研究者 - 寻找合作和资源',
                '神经科学和心理学博士生 - 寻找培训和研究机会',
                '脑科学专业学生 - 了解前沿研究方向',
                '认知心理学学者 - 获取最新研究成果',
                '跨学科研究人员 - 寻求神经科学视角'
            ],
            targetAudience_en: [
                'Cognitive neuroscience researchers - Seeking collaboration and resources',
                'Neuroscience and psychology doctoral students - Looking for training and research opportunities',
                'Brain science students - Learning about cutting-edge research directions',
                'Cognitive psychology scholars - Accessing latest research findings',
                'Interdisciplinary researchers - Seeking neuroscience perspectives'
            ],
            relatedResources: [
                {name: 'Cognitive Neuroscience Society (CNS)', id: 'cns'},
                {name: 'Journal of Experimental Psychology (APA)', id: 'jep'},
                {name: 'MIT Department of Brain & Cognitive Sciences', id: 'mitbcs'}
            ]
        },
        'jep': {
            id: 'jep',
            name: 'Journal of Experimental Psychology (APA)',
            logo: 'https://www.apa.org/images/journal-xge_tcm7-196940_w1024_n.jpg',
            url: 'https://www.apa.org/pubs/journals/xge',
            shortDescription: '实验与认知心理学核心期刊。',
            shortDescription_en: 'Core journal for experimental and cognitive psychology.',
            fullDescription: 'Journal of Experimental Psychology (JEP)是美国心理学会(APA)出版的一系列顶级期刊，专注于实验心理学研究。该系列包括多个分支期刊，如JEP: General、JEP: Learning, Memory, and Cognition、JEP: Human Perception and Performance等，涵盖了认知心理学的各个方面。JEP发表的研究采用严格的实验方法，探索人类认知过程的基本机制，包括注意力、记忆、学习、问题解决、决策制定、语言处理和感知等。作为该领域最具影响力的期刊之一，JEP的文章代表了认知和实验心理学的最高学术标准和最新研究进展。该期刊对心理学理论发展和实验方法创新有着重要贡献，是认知心理学研究者必不可少的学术资源。',
            fullDescription_en: 'The Journal of Experimental Psychology (JEP) is a series of top-tier journals published by the American Psychological Association (APA), focusing on experimental psychology research. The series includes multiple branch journals such as JEP: General, JEP: Learning, Memory, and Cognition, JEP: Human Perception and Performance, covering various aspects of cognitive psychology. Research published in JEP employs rigorous experimental methods to explore the fundamental mechanisms of human cognitive processes, including attention, memory, learning, problem-solving, decision-making, language processing, and perception. As one of the most influential journals in the field, articles in JEP represent the highest academic standards and latest research developments in cognitive and experimental psychology. The journal makes significant contributions to psychological theory development and experimental method innovation, serving as an essential academic resource for cognitive psychology researchers.',
            tags: ['实验心理学', '核心期刊', 'APA出版', '同行评审'],
            tags_en: ['Experimental Psychology', 'Core Journal', 'APA Publication', 'Peer-Reviewed'],
            targetAudience: [
                '认知心理学研究者 - 发表和获取高质量研究',
                '实验心理学博士生 - 学习研究方法和理论',
                '心理学教授 - 跟踪领域最新进展',
                '认知科学研究人员 - 获取跨学科视角',
                '心理学系图书馆 - 核心学术收藏'
            ],
            targetAudience_en: [
                'Cognitive psychology researchers - Publishing and accessing high-quality research',
                'Experimental psychology doctoral students - Learning research methods and theories',
                'Psychology professors - Tracking latest field developments',
                'Cognitive science researchers - Gaining interdisciplinary perspectives',
                'Psychology department libraries - Core academic collections'
            ],
            relatedResources: [
                {name: 'Cognitive Science Society', id: 'cogsci'},
                {name: 'Psychonomic Society', id: 'psychonomic'},
                {name: 'Max Planck Institute for Human Cognitive and Brain Sciences', id: 'maxplanck'}
            ]
        },
        'cogsci': {
            id: 'cogsci',
            name: 'Cognitive Science Society',
            logo: 'https://cognitivesciencesociety.org/wp-content/uploads/2019/01/cogsci-logo.png',
            url: 'https://cognitivesciencesociety.org/',
            shortDescription: '认知科学领域的国际学术组织。',
            shortDescription_en: 'International academic organization in cognitive science.',
            fullDescription: 'Cognitive Science Society（认知科学学会）是一个国际性学术组织，致力于促进认知科学的研究和教育。认知科学是一个跨学科领域，结合了心理学、神经科学、语言学、哲学、人工智能和人类学等多个学科，以理解智能和认知过程。该学会成立于1979年，每年举办认知科学年会，汇集来自世界各地的研究者分享最新研究成果。学会还出版《认知科学》期刊和《认知科学进展》系列丛书，这些都是该领域的重要学术资源。学会为学生和早期职业研究者提供奖学金和旅行补助，支持新一代认知科学家的发展。作为认知科学领域的主要学术组织，该学会在促进跨学科合作和推动认知过程理解方面发挥着关键作用。',
            fullDescription_en: 'The Cognitive Science Society is an international academic organization dedicated to promoting research and education in cognitive science. Cognitive science is an interdisciplinary field combining psychology, neuroscience, linguistics, philosophy, artificial intelligence, and anthropology to understand intelligence and cognitive processes. Founded in 1979, the society holds an annual Cognitive Science Conference, bringing together researchers from around the world to share the latest research findings. The society also publishes the journal "Cognitive Science" and the "Advances in Cognitive Science" series, which are important academic resources in the field. The society provides scholarships and travel grants for students and early career researchers, supporting the development of a new generation of cognitive scientists. As the primary academic organization in cognitive science, the society plays a key role in promoting interdisciplinary collaboration and advancing the understanding of cognitive processes.',
            tags: ['认知科学', '学术组织', '跨学科研究', '年度会议'],
            tags_en: ['Cognitive Science', 'Academic Organization', 'Interdisciplinary Research', 'Annual Conference'],
            targetAudience: [
                '认知科学研究者 - 学术交流和合作',
                '心理学和神经科学学者 - 跨学科视角',
                '人工智能研究人员 - 认知模型和理论',
                '语言学和哲学学者 - 认知理论基础',
                '研究生和博士生 - 学术发展和网络建设'
            ],
            targetAudience_en: [
                'Cognitive science researchers - Academic exchange and collaboration',
                'Psychology and neuroscience scholars - Interdisciplinary perspectives',
                'Artificial intelligence researchers - Cognitive models and theories',
                'Linguistics and philosophy scholars - Cognitive theory foundations',
                'Graduate and doctoral students - Academic development and networking'
            ],
            relatedResources: [
                {name: 'MIT Department of Brain & Cognitive Sciences', id: 'mitbcs'},
                {name: 'Journal of Experimental Psychology (APA)', id: 'jep'},
                {name: 'Psychonomic Society', id: 'psychonomic'}
            ]
        },
        'mitbcs': {
            id: 'mitbcs',
            name: 'MIT Department of Brain & Cognitive Sciences',
            logo: 'https://bcs.mit.edu/sites/default/files/BCS_logo_RGB.png',
            url: 'https://bcs.mit.edu/',
            shortDescription: '麻省理工学院脑与认知科学系，世界顶尖研究机构。',
            shortDescription_en: 'MIT Department of Brain & Cognitive Sciences, world-leading research institution.',
            fullDescription: 'MIT脑与认知科学系是世界顶尖的研究和教育机构，致力于理解大脑如何产生智能行为和认知。该系整合了认知科学、神经科学、计算神经科学和分子神经生物学等多个领域，采用多层次研究方法，从分子和细胞水平到系统和认知水平全面研究大脑。研究领域包括视觉和听觉处理、学习与记忆、语言获取、社会认知、决策制定和计算模型等。该系拥有一流的研究设施，包括先进的脑成像中心、行为测试实验室和计算资源。作为麻省理工学院的重要部门，它提供本科、硕士和博士课程，培养了许多认知科学和神经科学领域的领军人物。该系的跨学科方法和创新研究对理解人类智能和开发人工智能系统有着深远影响。',
            fullDescription_en: 'The MIT Department of Brain & Cognitive Sciences is a world-leading research and educational institution dedicated to understanding how the brain produces intelligent behavior and cognition. The department integrates multiple fields including cognitive science, neuroscience, computational neuroscience, and molecular neurobiology, employing a multi-level research approach to comprehensively study the brain from molecular and cellular levels to systems and cognitive levels. Research areas include visual and auditory processing, learning and memory, language acquisition, social cognition, decision-making, and computational modeling. The department possesses first-class research facilities, including advanced brain imaging centers, behavioral testing laboratories, and computational resources. As an important department at MIT, it offers undergraduate, master\'s, and doctoral programs, nurturing many leaders in cognitive science and neuroscience. The department\'s interdisciplinary approach and innovative research have profound impacts on understanding human intelligence and developing artificial intelligence systems.',
            tags: ['认知科学', '神经科学', '顶尖院系', '跨学科研究'],
            tags_en: ['Cognitive Science', 'Neuroscience', 'Top Department', 'Interdisciplinary Research'],
            targetAudience: [
                '认知科学和神经科学研究者 - 合作和资源',
                '脑科学博士生 - 顶尖教育和研究机会',
                '计算神经科学专家 - 模型和理论开发',
                '人工智能研究人员 - 生物启发的计算模型',
                '神经科学本科生 - 高质量教育和实习机会'
            ],
            targetAudience_en: [
                'Cognitive science and neuroscience researchers - Collaboration and resources',
                'Brain science doctoral students - Top-tier education and research opportunities',
                'Computational neuroscience experts - Model and theory development',
                'Artificial intelligence researchers - Biologically inspired computational models',
                'Neuroscience undergraduates - High-quality education and internship opportunities'
            ],
            relatedResources: [
                {name: 'Cognitive Science Society', id: 'cogsci'},
                {name: 'Max Planck Institute for Human Cognitive and Brain Sciences', id: 'maxplanck'},
                {name: 'Journal of Experimental Psychology (APA)', id: 'jep'}
            ]
        },
        'psychonomic': {
            id: 'psychonomic',
            name: 'Psychonomic Society',
            logo: 'https://www.psychonomic.org/resource/resmgr/images/psychonomic_society_logo.jpg',
            url: 'https://www.psychonomic.org/',
            shortDescription: '实验与认知心理学专业学会。',
            shortDescription_en: 'Professional society for experimental and cognitive psychology.',
            fullDescription: 'Psychonomic Society（心理学会）是一个专注于实验和认知心理学的国际学术组织，成立于1959年。该学会致力于促进认知过程的科学研究，包括注意力、学习、记忆、语言、感知、问题解决和决策等领域。学会每年举办年度会议，为研究者提供分享最新发现和方法的平台。学会出版多种高影响力期刊，如《注意力、感知与心理物理学》、《学习与行为》、《记忆与认知》等，这些期刊发表了该领域的重要研究成果。学会特别重视严格的实验方法和定量分析，推动认知心理学的科学标准。作为认知心理学领域的主要学术组织之一，Psychonomic Society在促进理论发展、方法创新和跨学科合作方面发挥着重要作用。',
            fullDescription_en: 'The Psychonomic Society is an international academic organization focused on experimental and cognitive psychology, established in 1959. The society is dedicated to promoting scientific research on cognitive processes, including attention, learning, memory, language, perception, problem-solving, and decision-making. The society holds an annual meeting, providing researchers with a platform to share the latest findings and methods. The society publishes several high-impact journals, such as "Attention, Perception & Psychophysics," "Learning & Behavior," and "Memory & Cognition," which publish important research findings in the field. The society particularly emphasizes rigorous experimental methods and quantitative analysis, advancing scientific standards in cognitive psychology. As one of the main academic organizations in cognitive psychology, the Psychonomic Society plays an important role in promoting theoretical development, methodological innovation, and interdisciplinary collaboration.',
            tags: ['认知心理学', '实验心理学', '学术组织', '专业期刊'],
            tags_en: ['Cognitive Psychology', 'Experimental Psychology', 'Academic Organization', 'Professional Journals'],
            targetAudience: [
                '认知心理学研究者 - 学术交流和发表',
                '实验心理学教授 - 最新研究方法和发现',
                '心理学博士生 - 专业发展和网络建设',
                '认知科学研究人员 - 跨学科视角',
                '心理学系学生 - 学术资源和职业发展'
            ],
            targetAudience_en: [
                'Cognitive psychology researchers - Academic exchange and publication',
                'Experimental psychology professors - Latest research methods and findings',
                'Psychology doctoral students - Professional development and networking',
                'Cognitive science researchers - Interdisciplinary perspectives',
                'Psychology department students - Academic resources and career development'
            ],
            relatedResources: [
                {name: 'Cognitive Science Society', id: 'cogsci'},
                {name: 'Journal of Experimental Psychology (APA)', id: 'jep'},
                {name: 'MIT Department of Brain & Cognitive Sciences', id: 'mitbcs'}
            ]
        },
        'srcd': {
            id: 'srcd',
            name: 'Society for Research in Child Development (SRCD)',
            logo: 'https://www.srcd.org/sites/default/files/srcd_logo.png',
            url: 'https://www.srcd.org/',
            shortDescription: '儿童发展研究领域的国际学术组织。',
            shortDescription_en: 'International academic organization in child development research.',
            fullDescription: 'Society for Research in Child Development (SRCD，儿童发展研究学会)是一个国际性学术组织，成立于1933年，致力于促进儿童发展的多学科科学研究。该学会汇集了来自心理学、教育学、社会学、人类学、神经科学等多个领域的研究者，关注从胎儿期到青少年期的发展过程。SRCD每两年举办一次大型学术会议，是该领域最重要的学术交流平台之一。学会出版《儿童发展》和《儿童发展视角》等高影响力期刊，发表儿童发展研究的前沿成果。SRCD特别重视研究成果向政策和实践的转化，设有专门的政策与传播委员会，促进科学研究对儿童福祉的实际贡献。该学会为学生和早期职业研究者提供多种资源和支持，包括奖学金、培训工作坊和职业发展机会，培养下一代儿童发展研究者。',
            fullDescription_en: 'The Society for Research in Child Development (SRCD) is an international academic organization established in 1933, dedicated to promoting multidisciplinary scientific research in child development. The society brings together researchers from psychology, education, sociology, anthropology, neuroscience, and other fields, focusing on developmental processes from the fetal period to adolescence. SRCD holds a major academic conference every two years, which is one of the most important platforms for academic exchange in the field. The society publishes high-impact journals such as "Child Development" and "Child Development Perspectives," featuring cutting-edge findings in child development research. SRCD particularly emphasizes the translation of research findings into policy and practice, with a dedicated Policy and Communications Committee to promote the practical contribution of scientific research to children\'s well-being. The society provides various resources and support for students and early career researchers, including scholarships, training workshops, and career development opportunities, nurturing the next generation of child development researchers.',
            tags: ['发展心理学', '儿童研究', '学术组织', '政策影响'],
            tags_en: ['Developmental Psychology', 'Child Research', 'Academic Organization', 'Policy Impact'],
            targetAudience: [
                '发展心理学研究者 - 学术交流和合作',
                '儿童发展专家 - 最新研究和方法',
                '教育研究人员 - 发展理论和应用',
                '儿童政策制定者 - 研究支持的政策建议',
                '临床儿童心理学家 - 发展理论基础'
            ],
            targetAudience_en: [
                'Developmental psychology researchers - Academic exchange and collaboration',
                'Child development experts - Latest research and methods',
                'Education researchers - Developmental theories and applications',
                'Child policy makers - Research-supported policy recommendations',
                'Clinical child psychologists - Developmental theory foundations'
            ],
            relatedResources: [
                {name: 'APA Division 7 - Developmental Psychology', id: 'apadiv7'},
                {name: 'Zero to Three', id: 'zerotothree'},
                {name: 'Child Development Journal', id: 'childdev'}
            ]
        },
        'apadiv7': {
            id: 'apadiv7',
            name: 'APA Division 7 - Developmental Psychology',
            logo: 'https://www.apadivisions.org/division-7/images/div7-logo.jpg',
            url: 'https://www.apadivisions.org/division-7',
            shortDescription: '美国心理学会发展心理学分会。',
            shortDescription_en: 'American Psychological Association\'s Developmental Psychology Division.',
            fullDescription: 'APA Division 7（美国心理学会第7分会）是专注于发展心理学的专业组织，隶属于美国心理学会。该分会汇集了研究人类发展各个方面的心理学家，包括认知、社会、情感和生物发展，覆盖从婴儿期到老年期的全生命周期。分会促进发展心理学的科学研究、教育和应用，通过年度会议、专业工作坊和网络研讨会等活动促进学术交流。分会出版《发展心理学》期刊和《发展心理学家》通讯，分享最新研究成果和领域动态。分会特别重视支持学生和早期职业发展心理学家，提供多种奖学金、研究基金和指导机会。作为发展心理学领域的主要专业组织之一，APA Division 7在推动理论发展、研究方法创新和跨学科合作方面发挥着重要作用，同时促进研究成果向实践和政策的转化。',
            fullDescription_en: 'APA Division 7 is a professional organization focused on developmental psychology, affiliated with the American Psychological Association. The division brings together psychologists researching various aspects of human development, including cognitive, social, emotional, and biological development, covering the entire life cycle from infancy to old age. The division promotes scientific research, education, and application of developmental psychology, facilitating academic exchange through annual meetings, professional workshops, and webinars. The division publishes the journal "Developmental Psychology" and the newsletter "The Developmental Psychologist," sharing the latest research findings and field developments. The division particularly emphasizes supporting students and early career developmental psychologists, providing various scholarships, research funds, and mentoring opportunities. As one of the main professional organizations in developmental psychology, APA Division 7 plays an important role in promoting theoretical development, research method innovation, and interdisciplinary collaboration, while facilitating the translation of research findings into practice and policy.',
            tags: ['发展心理学', 'APA分会', '专业组织', '全生命周期'],
            tags_en: ['Developmental Psychology', 'APA Division', 'Professional Organization', 'Lifespan Development'],
            targetAudience: [
                '发展心理学研究者 - 专业网络和资源',
                '临床发展心理学家 - 研究支持的实践',
                '心理学教授 - 教学和研究资源',
                '发展心理学博士生 - 职业发展和指导',
                '儿童和老年服务专业人员 - 发展理论应用'
            ],
            targetAudience_en: [
                'Developmental psychology researchers - Professional networks and resources',
                'Clinical developmental psychologists - Research-supported practice',
                'Psychology professors - Teaching and research resources',
                'Developmental psychology doctoral students - Career development and guidance',
                'Child and elder service professionals - Developmental theory applications'
            ],
            relatedResources: [
                {name: 'Society for Research in Child Development (SRCD)', id: 'srcd'},
                {name: 'International Society for the Study of Behavioural Development (ISSBD)', id: 'issbd'},
                {name: 'Zero to Three', id: 'zerotothree'}
            ]
        },
        'zerotothree': {
            id: 'zerotothree',
            name: 'Zero to Three',
            logo: 'https://www.zerotothree.org/wp-content/uploads/2022/06/ZERO-TO-THREE-logo.svg',
            url: 'https://www.zerotothree.org/',
            shortDescription: '婴幼儿早期发展专业组织。',
            shortDescription_en: 'Professional organization for early infant and toddler development.',
            fullDescription: 'Zero to Three是一个专注于婴幼儿（0-3岁）早期发展和福祉的非营利组织，成立于1977年。该组织汇集了儿童发展专家、研究人员、教育工作者和政策制定者，致力于确保每个婴幼儿都能获得健康发展的最佳开端。Zero to Three的工作涵盖多个领域，包括早期大脑发展研究、亲子关系支持、早期保育和教育质量提升、婴幼儿心理健康促进等。组织提供丰富的专业资源，包括研究报告、实践指南、培训课程和政策简报，服务于家长、专业人员和政策制定者。Zero to Three还积极参与政策倡导，推动支持婴幼儿和家庭的公共政策。作为婴幼儿发展领域的权威机构，该组织通过将科学研究转化为实用知识和实践，对促进婴幼儿健康发展和家庭支持发挥着重要作用。',
            fullDescription_en: 'Zero to Three is a nonprofit organization focused on early development and well-being of infants and toddlers (0-3 years), established in 1977. The organization brings together child development experts, researchers, educators, and policy makers, dedicated to ensuring every infant and toddler gets the best possible start for healthy development. Zero to Three\'s work covers multiple areas, including early brain development research, parent-child relationship support, early care and education quality improvement, and infant and toddler mental health promotion. The organization provides rich professional resources, including research reports, practice guidelines, training courses, and policy briefs, serving parents, professionals, and policy makers. Zero to Three also actively participates in policy advocacy, promoting public policies that support infants, toddlers, and families. As an authoritative institution in the field of infant and toddler development, the organization plays an important role in promoting healthy development of infants and toddlers and family support by translating scientific research into practical knowledge and practice.',
            tags: ['婴幼儿发展', '早期教育', '家庭支持', '政策倡导'],
            tags_en: ['Infant Development', 'Early Education', 'Family Support', 'Policy Advocacy'],
            targetAudience: [
                '婴幼儿教育工作者 - 发展理论和最佳实践',
                '儿童发展研究者 - 早期发展研究',
                '家长和照顾者 - 育儿知识和支持',
                '早期干预专家 - 评估和支持工具',
                '儿童政策制定者 - 研究支持的政策建议'
            ],
            targetAudience_en: [
                'Infant and toddler educators - Developmental theories and best practices',
                'Child development researchers - Early development research',
                'Parents and caregivers - Parenting knowledge and support',
                'Early intervention specialists - Assessment and support tools',
                'Child policy makers - Research-supported policy recommendations'
            ],
            relatedResources: [
                {name: 'Society for Research in Child Development (SRCD)', id: 'srcd'},
                {name: 'APA Division 7 - Developmental Psychology', id: 'apadiv7'},
                {name: 'Child Development Journal', id: 'childdev'}
            ]
        },
        'issbd': {
            id: 'issbd',
            name: 'International Society for the Study of Behavioural Development (ISSBD)',
            logo: 'https://www.issbd.org/images/issbd-logo.png',
            url: 'https://www.issbd.org/',
            shortDescription: '全球发展心理学研究者组织。',
            shortDescription_en: 'Global organization for developmental psychology researchers.',
            fullDescription: 'International Society for the Study of Behavioural Development (ISSBD，国际行为发展研究学会)是一个全球性学术组织，致力于促进人类发展科学的跨文化和跨学科研究。成立于1969年，ISSBD汇集了来自世界各地的发展心理学家和相关领域研究者，关注从婴儿期到老年期的全生命周期发展。学会每两年举办一次国际会议，轮流在不同国家和地区举行，促进全球学术交流和合作。ISSBD出版《国际行为发展杂志》，发表高质量的发展研究论文。学会特别重视发展中国家和地区的研究能力建设，提供研究基金、培训工作坊和导师计划，支持新兴学者。ISSBD的一个独特特点是其强调跨文化视角，促进对不同文化背景下发展过程的理解。作为发展心理学领域最具国际影响力的组织之一，ISSBD在促进全球发展科学的进步和应用方面发挥着重要作用。',
            fullDescription_en: 'The International Society for the Study of Behavioural Development (ISSBD) is a global academic organization dedicated to promoting cross-cultural and interdisciplinary research in human development science. Established in 1969, ISSBD brings together developmental psychologists and related field researchers from around the world, focusing on lifespan development from infancy to old age. The society holds an international conference every two years, rotating between different countries and regions, promoting global academic exchange and collaboration. ISSBD publishes the "International Journal of Behavioral Development," featuring high-quality developmental research papers. The society particularly emphasizes research capacity building in developing countries and regions, providing research funds, training workshops, and mentoring programs to support emerging scholars. A unique feature of ISSBD is its emphasis on cross-cultural perspectives, promoting understanding of developmental processes across different cultural backgrounds. As one of the most internationally influential organizations in developmental psychology, ISSBD plays an important role in advancing and applying global developmental science.',
            tags: ['发展心理学', '国际组织', '跨文化研究', '全生命周期'],
            tags_en: ['Developmental Psychology', 'International Organization', 'Cross-cultural Research', 'Lifespan Development'],
            targetAudience: [
                '发展心理学研究者 - 国际合作和交流',
                '跨文化研究专家 - 文化比较视角',
                '发展心理学博士生 - 国际网络和培训',
                '发展中国家学者 - 研究能力建设',
                '生命周期发展研究者 - 整合视角'
            ],
            targetAudience_en: [
                'Developmental psychology researchers - International collaboration and exchange',
                'Cross-cultural research experts - Cultural comparative perspectives',
                'Developmental psychology doctoral students - International networking and training',
                'Scholars from developing countries - Research capacity building',
                'Lifespan development researchers - Integrative perspectives'
            ],
            relatedResources: [
                {name: 'Society for Research in Child Development (SRCD)', id: 'srcd'},
                {name: 'APA Division 7 - Developmental Psychology', id: 'apadiv7'},
                {name: 'Child Development Journal', id: 'childdev'}
            ]
        },
        'childdev': {
            id: 'childdev',
            name: 'Child Development Journal',
            logo: 'https://onlinelibrary.wiley.com/pb-assets/journal-banners/15327078-1501538962270.jpg',
            url: 'https://srcd.onlinelibrary.wiley.com/journal/14678624',
            shortDescription: '发展心理学顶级期刊。',
            shortDescription_en: 'Top journal in developmental psychology.',
            fullDescription: 'Child Development是发展心理学领域最具影响力和权威性的学术期刊之一，由Society for Research in Child Development (SRCD)出版。创刊于1930年，该期刊发表关于儿童发展各个方面的高质量研究，包括认知、社会、情感、语言、道德和身体发展等。期刊涵盖从胎儿期到青少年期的各个发展阶段，采用多种研究方法，包括实验研究、纵向研究、跨文化比较和神经科学方法等。Child Development以其严格的同行评审过程和高学术标准而闻名，发表的文章对发展心理学理论和方法的进步有着重要贡献。该期刊的影响因子在心理学期刊中排名靠前，是该领域研究者发表重要成果的首选平台之一。对于发展心理学研究者、教育工作者和政策制定者来说，Child Development是了解儿童发展最新研究进展的核心资源。',
            fullDescription_en: 'Child Development is one of the most influential and authoritative academic journals in developmental psychology, published by the Society for Research in Child Development (SRCD). Established in 1930, the journal publishes high-quality research on various aspects of child development, including cognitive, social, emotional, language, moral, and physical development. The journal covers all developmental stages from the fetal period to adolescence, employing various research methods including experimental research, longitudinal studies, cross-cultural comparisons, and neuroscience methods. Child Development is known for its rigorous peer review process and high academic standards, with published articles making significant contributions to the advancement of developmental psychology theories and methods. The journal\'s impact factor ranks high among psychology journals, making it one of the preferred platforms for researchers to publish important findings in the field. For developmental psychology researchers, educators, and policy makers, Child Development is a core resource for understanding the latest research developments in child development.',
            tags: ['发展心理学', '顶级期刊', '同行评审', 'SRCD出版'],
            tags_en: ['Developmental Psychology', 'Top Journal', 'Peer-Reviewed', 'SRCD Publication'],
            targetAudience: [
                '发展心理学研究者 - 发表和获取高质量研究',
                '儿童发展专家 - 最新理论和发现',
                '发展心理学博士生 - 研究方法和理论学习',
                '教育研究人员 - 发展理论基础',
                '儿童政策顾问 - 研究支持的政策建议'
            ],
            targetAudience_en: [
                'Developmental psychology researchers - Publishing and accessing high-quality research',
                'Child development experts - Latest theories and findings',
                'Developmental psychology doctoral students - Learning research methods and theories',
                'Education researchers - Developmental theory foundations',
                'Child policy advisors - Research-supported policy recommendations'
            ],
            relatedResources: [
                {name: 'Society for Research in Child Development (SRCD)', id: 'srcd'},
                {name: 'International Society for the Study of Behavioural Development (ISSBD)', id: 'issbd'},
                {name: 'Zero to Three', id: 'zerotothree'}
            ]
        },
        'simplypsychology': {
            id: 'simplypsychology',
            name: 'Simply Psychology',
            logo: 'https://simplypsychology.org/wp-content/uploads/2018/03/simply-psychology-logo.jpg',
            url: 'https://www.simplypsychology.org/',
            shortDescription: '心理学核心概念与实验，清晰易懂。',
            shortDescription_en: 'Core psychology concepts and experiments, clear and easy to understand.',
            fullDescription: 'Simply Psychology是一个专注于提供清晰、易懂的心理学教育资源的网站，由心理学家Saul McLeod博士创建和维护。该网站以简洁明了的方式解释复杂的心理学概念、理论和实验，使其对学生和普通读者都易于理解。内容涵盖了心理学的主要领域，包括认知心理学、发展心理学、社会心理学、行为心理学和生物心理学等。每篇文章都配有图表、图像和案例研究，帮助读者更好地理解概念。该网站特别适合心理学入门学习者，提供了从基础到高级的各种主题，是学生、教师和对心理学感兴趣的人士的宝贵资源。',
            fullDescription_en: 'Simply Psychology is a website dedicated to providing clear, accessible psychology educational resources, created and maintained by psychologist Dr. Saul McLeod. The site explains complex psychological concepts, theories, and experiments in a concise, understandable manner, making them accessible to students and general readers alike. Content covers major areas of psychology including cognitive psychology, developmental psychology, social psychology, behavioral psychology, and biopsychology. Each article is accompanied by diagrams, images, and case studies to help readers better understand concepts. The website is particularly suitable for those beginning to learn psychology, offering topics ranging from basic to advanced, and serves as a valuable resource for students, teachers, and anyone interested in psychology.',
            tags: ['入门资源', '核心概念', '教育网站', '学术参考'],
            tags_en: ['Starter Resource', 'Core Concepts', 'Educational Website', 'Academic Reference'],
            targetAudience: [
                '心理学专业学生 - 需要清晰解释的基础概念',
                '高中生和大学生 - 学习心理学课程',
                '教师 - 寻找教学资源和材料',
                '自学者 - 系统学习心理学知识',
                '对心理学感兴趣的普通读者'
            ],
            targetAudience_en: [
                'Psychology students - Needing clear explanations of basic concepts',
                'High school and college students - Studying psychology courses',
                'Teachers - Looking for teaching resources and materials',
                'Self-learners - Systematically learning psychology knowledge',
                'General readers interested in psychology'
            ],
            relatedResources: [
                {name: 'Verywell Mind - Psychology Basics', id: 'verywellmind'},
                {name: 'Noba Project - Free Psychology Textbook', id: 'noba'},
                {name: 'CrashCourse - Psychology (YouTube)', id: 'crashcourse'}
            ]
        },
        'verywellmind': {
            id: 'verywellmind',
            name: 'Verywell Mind - Psychology Basics',
            logo: 'https://www.verywellmind.com/thmb/HgPtuwmF_H_7JJN2O1csukiRkCs=/650x650/filters:no_upscale():max_bytes(150000):strip_icc()/verywell-mind-logo-5c6f6c5346e0fb0001670cc1.png',
            url: 'https://www.verywellmind.com/psychology-4157187',
            shortDescription: '面向大众的心理学入门科普。',
            shortDescription_en: 'Psychology basics for the general public.',
            fullDescription: 'Verywell Mind是一个专注于心理健康和心理学知识普及的网站，提供由心理学家、治疗师和健康专业人士撰写和审核的内容。该网站以通俗易懂的语言解释心理学概念，涵盖了情绪健康、人格、心理障碍、治疗方法、自我提升等多个方面。内容形式多样，包括文章、指南、测验和专家访谈等，帮助读者理解心理健康问题并提供实用的应对策略。Verywell Mind特别注重科学依据，所有内容都基于最新的研究和专业知识，同时保持易于理解和实用性。该网站是寻求心理健康信息、自助资源或对心理学感兴趣的普通读者的理想选择。',
            fullDescription_en: 'Verywell Mind is a website focused on mental health and psychology education, providing content written and reviewed by psychologists, therapists, and health professionals. The site explains psychological concepts in accessible language, covering emotional health, personality, psychological disorders, treatment methods, self-improvement, and more. Content comes in various formats including articles, guides, quizzes, and expert interviews, helping readers understand mental health issues and providing practical coping strategies. Verywell Mind particularly emphasizes scientific evidence, with all content based on the latest research and professional knowledge while maintaining accessibility and practicality. The website is an ideal choice for those seeking mental health information, self-help resources, or general readers interested in psychology.',
            tags: ['科普资源', '心理健康', '自助指南', '实用建议'],
            tags_en: ['Popular Science', 'Mental Health', 'Self-help Guides', 'Practical Advice'],
            targetAudience: [
                '普通大众 - 寻求可靠的心理健康信息',
                '心理健康问题患者及其家人 - 了解症状和治疗选择',
                '自我提升爱好者 - 寻找心理学应用于日常生活的方法',
                '学生 - 需要易于理解的心理学入门资料',
                '健康专业人士 - 寻找向患者推荐的资源'
            ],
            targetAudience_en: [
                'General public - Seeking reliable mental health information',
                'Mental health patients and their families - Understanding symptoms and treatment options',
                'Self-improvement enthusiasts - Finding ways to apply psychology in daily life',
                'Students - Needing easy-to-understand introductory psychology materials',
                'Health professionals - Looking for resources to recommend to patients'
            ],
            relatedResources: [
                {name: 'Simply Psychology', id: 'simplypsychology'},
                {name: 'APA Free E-Books', id: 'apa'},
                {name: 'CrashCourse - Psychology (YouTube)', id: 'crashcourse'}
            ]
        },
        'crashcourse': {
            id: 'crashcourse',
            name: 'CrashCourse - Psychology (YouTube)',
            logo: 'https://yt3.googleusercontent.com/ytc/AIf8zZRDVYGhVNGTRQZHPiQ_eXCU_dDEGZ0QOoyc6q5A=s900-c-k-c0x00ffffff-no-rj',
            url: 'https://www.youtube.com/playlist?list=PL8dPuuaLjXtOPRKzVLY0jJY-uHOH9KVU6',
            shortDescription: '生动的动画心理学视频课程，覆盖主要分支。',
            shortDescription_en: 'Vivid animated psychology video courses covering major branches.',
            fullDescription: 'CrashCourse Psychology是YouTube上广受欢迎的教育系列视频，由Hank Green主持，提供全面且引人入胜的心理学入门课程。该系列包含40多个10-15分钟的视频，涵盖了心理学的主要领域，从心理学历史和研究方法，到认知过程、发展、社会心理学、心理障碍和治疗等。视频采用生动的动画、幽默的讲解和清晰的例子，使复杂的概念变得易于理解。CrashCourse Psychology特别适合视觉学习者和寻求简明扼要介绍的学生，提供了一种有趣且高效的方式来学习心理学基础知识。所有内容均免费提供，可随时访问，是课堂学习的绝佳补充或自学资源。',
            fullDescription_en: 'CrashCourse Psychology is a popular educational video series on YouTube hosted by Hank Green, offering a comprehensive and engaging introduction to psychology. The series includes over 40 videos of 10-15 minutes each, covering major areas of psychology from its history and research methods to cognitive processes, development, social psychology, psychological disorders, and treatments. Videos use vivid animations, humorous explanations, and clear examples to make complex concepts easy to understand. CrashCourse Psychology is particularly suitable for visual learners and students seeking concise introductions, providing a fun and efficient way to learn psychology fundamentals. All content is freely available and accessible anytime, making it an excellent supplement to classroom learning or a self-study resource.',
            tags: ['视频课程', '动画讲解', '系统入门', '免费资源'],
            tags_en: ['Video Courses', 'Animated Explanations', 'Systematic Introduction', 'Free Resource'],
            targetAudience: [
                '高中生和大学生 - 补充课堂学习',
                '视觉学习者 - 偏好动态、图像化的学习方式',
                '自学者 - 寻求结构化但有趣的心理学入门',
                '教师 - 寻找课堂辅助教学资源',
                '对心理学有兴趣但时间有限的人士'
            ],
            targetAudience_en: [
                'High school and college students - Supplementing classroom learning',
                'Visual learners - Preferring dynamic, visual learning methods',
                'Self-learners - Seeking structured but fun psychology introduction',
                'Teachers - Looking for classroom teaching aids',
                'People interested in psychology but with limited time'
            ],
            relatedResources: [
                {name: 'Simply Psychology', id: 'simplypsychology'},
                {name: 'Verywell Mind - Psychology Basics', id: 'verywellmind'},
                {name: 'Yale University Open Courses', id: 'yale'}
            ]
        },
        'oli': {
            id: 'oli',
            name: 'Open Learning Initiative - Introduction to Psychology',
            logo: 'https://oli.cmu.edu/wp-content/uploads/2018/10/oli-logo-78x78.png',
            url: 'https://oli.cmu.edu/courses/introduction-to-psychology-open-free/',
            shortDescription: '免费互动课程，含教材+练习。',
            shortDescription_en: 'Free interactive course with textbook and exercises.',
            fullDescription: 'Open Learning Initiative (OLI)是卡内基梅隆大学开发的一个创新教育平台，其心理学导论课程提供了高质量、互动性强的学习体验。这门课程结合了全面的教材内容和丰富的互动练习，包括自我评估测验、模拟实验和问题解决活动。OLI的独特之处在于其自适应学习系统，能够根据学习者的表现提供个性化反馈和学习路径。课程内容涵盖心理学的主要领域，包括研究方法、生物心理学、认知、发展、社会和临床心理学等。所有材料均基于最新的教育研究和学习科学原理设计，旨在最大化学习效果。这门课程完全免费，无需注册即可访问，是自学者和教育者的宝贵资源。',
            fullDescription_en: 'The Open Learning Initiative (OLI) is an innovative educational platform developed by Carnegie Mellon University, with its Introduction to Psychology course offering a high-quality, highly interactive learning experience. This course combines comprehensive textbook content with rich interactive exercises, including self-assessment quizzes, simulated experiments, and problem-solving activities. What makes OLI unique is its adaptive learning system that provides personalized feedback and learning paths based on the learner\'s performance. Course content covers major areas of psychology including research methods, biopsychology, cognition, development, social and clinical psychology. All materials are designed based on the latest educational research and learning science principles, aiming to maximize learning effectiveness. This course is completely free and accessible without registration, making it a valuable resource for self-learners and educators.',
            tags: ['互动课程', '自学资源', '自适应学习', '实践练习'],
            tags_en: ['Interactive Course', 'Self-learning Resource', 'Adaptive Learning', 'Practical Exercises'],
            targetAudience: [
                '自学者 - 寻求结构化且互动的学习体验',
                '大学生 - 补充课堂学习或自主学习',
                '教育工作者 - 寻找高质量的教学资源',
                '心理学爱好者 - 系统学习心理学基础',
                '远程学习者 - 需要灵活的学习选择'
            ],
            targetAudience_en: [
                'Self-learners - Seeking structured and interactive learning experiences',
                'College students - Supplementing classroom learning or independent study',
                'Educators - Looking for high-quality teaching resources',
                'Psychology enthusiasts - Systematically learning psychology basics',
                'Distance learners - Needing flexible learning options'
            ],
            relatedResources: [
                {name: 'OpenStax Psychology 2e', id: 'openstax'},
                {name: 'MIT OpenCourseWare - Psychology', id: 'mit'},
                {name: 'Noba Project - Free Psychology Textbook', id: 'noba'}
            ]
        },
        'sep': {
            id: 'sep',
            name: 'Stanford Encyclopedia of Philosophy - Psychology Related',
            logo: 'https://plato.stanford.edu/symbols/sep-man.jpg',
            url: 'https://plato.stanford.edu/contents.html#p',
            shortDescription: '心理学与哲学交叉主题的权威条目。',
            shortDescription_en: 'Authoritative entries on topics at the intersection of psychology and philosophy.',
            fullDescription: 'Stanford Encyclopedia of Philosophy (SEP)是一个由斯坦福大学维护的高质量哲学参考资源，其中包含许多与心理学相关的条目。这些条目涵盖了心理学与哲学的交叉领域，如心灵哲学、认知科学、意识研究、情绪理论、自由意志和决策理论等。每个条目都由该领域的专家撰写，经过同行评审，并定期更新以反映最新的学术发展。SEP的条目深入而全面，提供了对复杂概念的详细解释、历史背景和当代争论。虽然内容较为学术化，但写作清晰，适合高级本科生、研究生和学者使用。所有内容均免费提供，是研究心理学哲学基础和理论框架的宝贵资源。',
            fullDescription_en: 'The Stanford Encyclopedia of Philosophy (SEP) is a high-quality philosophical reference resource maintained by Stanford University, containing numerous entries related to psychology. These entries cover intersections between psychology and philosophy, such as philosophy of mind, cognitive science, consciousness studies, theories of emotion, free will, and decision theory. Each entry is written by an expert in the field, peer-reviewed, and regularly updated to reflect the latest academic developments. SEP entries are in-depth and comprehensive, providing detailed explanations of complex concepts, historical backgrounds, and contemporary debates. Although the content is rather academic, it is clearly written and suitable for advanced undergraduates, graduate students, and scholars. All content is freely available, making it a valuable resource for researching the philosophical foundations and theoretical frameworks of psychology.',
            tags: ['学术资源', '交叉学科', '哲学视角', '深度分析'],
            tags_en: ['Academic Resource', 'Interdisciplinary', 'Philosophical Perspective', 'In-depth Analysis'],
            targetAudience: [
                '高级心理学学生 - 探索心理学的哲学基础',
                '研究生和学者 - 进行深入的理论研究',
                '哲学专业学生 - 了解心灵哲学和认知科学',
                '跨学科研究者 - 研究心理学与哲学的交叉领域',
                '对心理学理论框架感兴趣的高级读者'
            ],
            targetAudience_en: [
                'Advanced psychology students - Exploring philosophical foundations of psychology',
                'Graduate students and scholars - Conducting in-depth theoretical research',
                'Philosophy majors - Learning about philosophy of mind and cognitive science',
                'Interdisciplinary researchers - Studying intersections between psychology and philosophy',
                'Advanced readers interested in theoretical frameworks of psychology'
            ],
            relatedResources: [
                {name: 'MIT OpenCourseWare - Psychology', id: 'mit'},
                {name: 'Open Learning Initiative - Introduction to Psychology', id: 'oli'},
                {name: 'Harvard University Online Courses', id: 'harvard'}
            ]
        },
        'coursera': {
            id: 'coursera',
            name: 'Coursera - Psychology',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/1200px-Coursera-Logo_600x600.svg.png',
            url: 'https://coursera.org/courses?query=psychology',
            shortDescription: '国际心理学课程平台，涵盖认知、发展、临床、社会心理学等多个方向。',
            shortDescription_en: 'International psychology course platform covering cognitive, developmental, clinical, social psychology and more.',
            fullDescription: 'Coursera是全球领先的在线学习平台，提供来自世界顶尖大学和机构的心理学课程。平台上的心理学课程涵盖了认知心理学、发展心理学、临床心理学、社会心理学、积极心理学等多个领域。课程由耶鲁大学、密歇根大学、宾夕法尼亚大学等知名院校的教授讲授，内容包括视频讲座、阅读材料、互动测验和同行评审作业。学习者可以获得专业证书，提升职业技能和学术知识。Coursera的课程设计灵活，允许学习者按照自己的节奏学习，同时提供论坛讨论和导师支持，创造了一个全球性的学习社区。',
            fullDescription_en: 'Coursera is a leading global online learning platform offering psychology courses from top universities and institutions worldwide. The psychology courses cover multiple fields including cognitive psychology, developmental psychology, clinical psychology, social psychology, and positive psychology. Courses are taught by professors from renowned institutions such as Yale University, University of Michigan, and University of Pennsylvania, featuring video lectures, reading materials, interactive quizzes, and peer-reviewed assignments. Learners can earn professional certificates to enhance career skills and academic knowledge. Coursera\'s course design is flexible, allowing learners to study at their own pace while providing forum discussions and mentor support, creating a global learning community.',
            tags: ['在线课程', '多领域', '专业证书', '国际平台'],
            tags_en: ['Online Courses', 'Multiple Fields', 'Professional Certificates', 'International Platform'],
            targetAudience: [
                '心理学专业学生 - 寻求补充课程和专业知识',
                '心理健康专业人士 - 希望更新知识和技能',
                '对心理学感兴趣的普通大众 - 希望了解人类行为和心理过程',
                '教育工作者 - 寻求心理学教学资源',
                '研究人员 - 需要了解最新研究方法和理论'
            ],
            targetAudience_en: [
                'Psychology students - Seeking supplementary courses and professional knowledge',
                'Mental health professionals - Looking to update knowledge and skills',
                'General public interested in psychology - Wanting to understand human behavior and mental processes',
                'Educators - Seeking psychology teaching resources',
                'Researchers - Needing to learn about latest research methods and theories'
            ],
            relatedResources: [
                {name: 'edX - Psychology', id: 'edx'},
                {name: 'MIT OpenCourseWare - Psychology', id: 'mit'},
                {name: 'Yale University Open Courses', id: 'yale'}
            ]
        },
        'edx': {
            id: 'edx',
            name: 'edX - Psychology',
            logo: 'logo/edX.png',
            url: 'https://edx.org/learn/psychology',
            shortDescription: '世界顶尖大学开放课程，含认知科学、教育心理学、社会心理学。',
            shortDescription_en: 'Open courses from world-class universities, including cognitive science, educational psychology, and social psychology.',
            fullDescription: 'edX是由哈佛大学和麻省理工学院创立的非营利性在线学习平台，提供来自全球顶尖大学的高质量心理学课程。平台上的心理学课程涵盖了认知科学、教育心理学、社会心理学、临床心理学和神经科学等领域。这些课程由哈佛大学、伯克利大学、麻省理工学院等知名院校的教授讲授，采用视频讲座、互动练习和讨论论坛等多种教学方式。edX提供免费审核课程和付费认证课程两种选择，学习者可以根据自己的需求选择适合的学习方式。平台还提供MicroMasters和专业证书项目，帮助学习者获得专业认可和职业发展机会。',
            fullDescription_en: 'edX is a non-profit online learning platform founded by Harvard University and MIT, offering high-quality psychology courses from top global universities. The psychology courses cover cognitive science, educational psychology, social psychology, clinical psychology, and neuroscience. These courses are taught by professors from renowned institutions such as Harvard University, UC Berkeley, and MIT, using various teaching methods including video lectures, interactive exercises, and discussion forums. edX offers both free audit courses and paid verified courses, allowing learners to choose according to their needs. The platform also provides MicroMasters and Professional Certificate programs, helping learners gain professional recognition and career development opportunities.',
            tags: ['在线课程', '名校课程', '认证项目', '多语言'],
            tags_en: ['Online Courses', 'Prestigious University Courses', 'Certification Programs', 'Multilingual'],
            targetAudience: [
                '大学生和研究生 - 寻求额外的学术资源',
                '心理学专业人士 - 希望拓展专业知识',
                '教育工作者 - 寻求教学资源和专业发展',
                '职业转换者 - 希望进入心理学相关领域',
                '终身学习者 - 对心理学有浓厚兴趣'
            ],
            targetAudience_en: [
                'College students and graduates - Seeking additional academic resources',
                'Psychology professionals - Looking to expand professional knowledge',
                'Educators - Seeking teaching resources and professional development',
                'Career changers - Wanting to enter psychology-related fields',
                'Lifelong learners - With strong interest in psychology'
            ],
            relatedResources: [
                {name: 'Coursera - Psychology', id: 'coursera'},
                {name: 'Harvard University Online Courses', id: 'harvard'},
                {name: 'Berkeley Online Learning', id: 'berkeley'}
            ]
        },
        'mit': {
            id: 'mit',
            name: 'MIT OpenCourseWare - Psychology',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/1280px-MIT_logo.svg.png',
            url: 'https://ocw.mit.edu/courses/brain-and-cognitive-sciences/',
            shortDescription: '麻省理工学院开放课程，提供认知科学、神经科学等领域的免费学习资源。',
            shortDescription_en: 'MIT OpenCourseWare provides free learning resources in cognitive science, neuroscience, and related fields.',
            fullDescription: 'MIT OpenCourseWare是麻省理工学院的一项开创性计划，提供几乎所有MIT课程的免费在线教材。在心理学和认知科学领域，OCW提供了大量高质量的课程资源，包括认知科学、神经科学、发展心理学和实验心理学等。这些资源包括完整的课程大纲、讲义、阅读材料、作业问题和考试试题，有些课程还提供视频讲座。MIT OCW的独特之处在于它提供了真实的MIT课程材料，让全球学习者能够接触到世界顶级大学的教育内容。这些资源完全免费，没有注册要求，学习者可以按照自己的节奏学习，但不提供学分或证书。',
            fullDescription_en: 'MIT OpenCourseWare is a pioneering initiative by the Massachusetts Institute of Technology that provides free online access to materials from nearly all MIT courses. In the fields of psychology and cognitive science, OCW offers numerous high-quality course resources, including cognitive science, neuroscience, developmental psychology, and experimental psychology. These resources include complete course syllabi, lecture notes, reading materials, assignment problems, and exam questions, with some courses also offering video lectures. What makes MIT OCW unique is that it provides authentic MIT course materials, allowing learners worldwide to access educational content from a world-class university. These resources are completely free with no registration requirements, allowing learners to study at their own pace, although no credits or certificates are provided.',
            tags: ['开放教育资源', '认知科学', '神经科学', '免费'],
            tags_en: ['Open Educational Resources', 'Cognitive Science', 'Neuroscience', 'Free'],
            targetAudience: [
                '自学者 - 寻求高质量的免费学习资源',
                '心理学和认知科学专业学生 - 需要补充学习材料',
                '教育工作者 - 寻找教学资源和课程设计灵感',
                '研究人员 - 了解MIT的研究方法和理论框架',
                '对认知科学和神经科学感兴趣的专业人士'
            ],
            targetAudience_en: [
                'Self-learners - Seeking high-quality free learning resources',
                'Psychology and cognitive science students - Needing supplementary study materials',
                'Educators - Looking for teaching resources and course design inspiration',
                'Researchers - Understanding MIT\'s research methods and theoretical frameworks',
                'Professionals interested in cognitive science and neuroscience'
            ],
            relatedResources: [
                {name: 'Yale University Open Courses', id: 'yale'},
                {name: 'Harvard University Online Courses', id: 'harvard'},
                {name: 'Stanford Online', id: 'stanford'}
            ]
        },
        'openstax': {
            id: 'openstax',
            name: 'OpenStax Psychology 2e',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/OpenStax_logo.svg/1200px-OpenStax_logo.svg.png',
            url: 'https://openstax.org/details/books/psychology-2e',
            shortDescription: '免费、开源心理学基础教材，涵盖心理学核心概念，适合入门。',
            shortDescription_en: 'Free, open-source psychology textbook covering core concepts, ideal for beginners.',
            fullDescription: 'OpenStax Psychology 2e是一本全面的心理学入门教材，由OpenStax组织开发并免费提供。这本教材涵盖了心理学的所有核心领域，包括研究方法、生物心理学、感知、学习、记忆、认知、发展、社会和人格心理学、心理障碍及其治疗等。教材采用清晰的语言和结构，配有丰富的图表、案例研究和实际应用示例，使复杂的概念易于理解。作为开放教育资源，它可以免费下载为PDF、EPUB或在线阅读，也可以低成本购买印刷版。教材由专业心理学家和教育工作者编写，定期更新以反映最新的研究和教学实践。OpenStax Psychology 2e特别适合大学心理学导论课程，也是自学者的理想资源。',
            fullDescription_en: 'OpenStax Psychology 2e is a comprehensive introductory psychology textbook developed and provided for free by the OpenStax organization. This textbook covers all core areas of psychology, including research methods, biopsychology, sensation and perception, learning, memory, cognition, development, social and personality psychology, psychological disorders, and their treatments. The textbook uses clear language and structure, with rich illustrations, case studies, and practical application examples that make complex concepts easy to understand. As an open educational resource, it can be downloaded for free as PDF, EPUB, or read online, with low-cost print versions also available. The textbook is written by professional psychologists and educators and is regularly updated to reflect the latest research and teaching practices. OpenStax Psychology 2e is particularly suitable for college introductory psychology courses and is an ideal resource for self-learners.',
            tags: ['免费教材', '开放教育资源', '心理学基础', '电子书'],
            tags_en: ['Free Textbook', 'Open Educational Resource', 'Psychology Fundamentals', 'E-book'],
            targetAudience: [
                '大学生 - 修读心理学导论课程',
                '心理学专业新生 - 建立基础知识',
                '教育工作者 - 寻找免费教学资源',
                '自学者 - 系统学习心理学基础',
                '心理健康工作者 - 复习核心概念'
            ],
            targetAudience_en: [
                'College students - Taking introductory psychology courses',
                'New psychology majors - Building foundational knowledge',
                'Educators - Seeking free teaching resources',
                'Self-learners - Systematically learning psychology basics',
                'Mental health workers - Reviewing core concepts'
            ],
            relatedResources: [
                {name: 'Noba Project - Free Psychology Textbook', id: 'noba'},
                {name: 'Saylor Academy - Psychology Textbooks', id: 'saylor'},
                {name: 'MIT OpenCourseWare - Psychology', id: 'mit'}
            ]
        },
        'noba': {
            id: 'noba',
            name: 'Noba Project - Free Psychology Textbook',
            logo: 'logo/noba.png',
            url: 'https://nobaproject.com/textbooks',
            shortDescription: '全球学者撰写的模块化教材，免费电子书（PDF/在线阅读）。',
            shortDescription_en: 'Modular textbooks written by global scholars, free e-books (PDF/online reading).',
            fullDescription: 'Noba Project是一个创新的心理学教育平台，提供由全球顶尖心理学家撰写的高质量、模块化的心理学教材。该项目的独特之处在于其灵活的模块化设计，允许教育者和学习者根据自己的需求自定义教材内容。Noba提供超过100个独立的心理学主题模块，涵盖从基础理论到应用心理学的各个方面。所有内容均以开放获取方式提供，可以免费下载PDF版本或在线阅读。Noba教材的内容定期更新，反映最新的科学发现和教学方法。平台还提供教学资源、测验和多媒体材料，支持教育者有效地使用这些材料。Noba Project致力于减轻学生的教育成本负担，同时提高心理学教育的质量和可及性。',
            fullDescription_en: 'The Noba Project is an innovative psychology education platform offering high-quality, modular psychology textbooks written by top psychologists from around the world. What makes this project unique is its flexible modular design, allowing educators and learners to customize textbook content according to their needs. Noba provides over 100 independent psychology topic modules covering various aspects from basic theories to applied psychology. All content is provided with open access, available for free download in PDF format or online reading. Noba textbook content is regularly updated to reflect the latest scientific discoveries and teaching methods. The platform also offers teaching resources, quizzes, and multimedia materials to support educators in effectively using these materials. The Noba Project is committed to reducing the financial burden of education on students while improving the quality and accessibility of psychology education.',
            tags: ['模块化教材', '开放获取', '自定义内容', '教学资源'],
            tags_en: ['Modular Textbook', 'Open Access', 'Customizable Content', 'Teaching Resources'],
            targetAudience: [
                '心理学教授 - 寻找灵活的教学材料',
                '大学生 - 获取免费、高质量的学习资源',
                '心理学专业学生 - 深入特定主题',
                '教育机构 - 降低教材成本',
                '终身学习者 - 按兴趣学习心理学主题'
            ],
            targetAudience_en: [
                'Psychology professors - Seeking flexible teaching materials',
                'College students - Accessing free, high-quality learning resources',
                'Psychology majors - Delving into specific topics',
                'Educational institutions - Reducing textbook costs',
                'Lifelong learners - Studying psychology topics by interest'
            ],
            relatedResources: [
                {name: 'OpenStax Psychology 2e', id: 'openstax'},
                {name: 'Saylor Academy - Psychology Textbooks', id: 'saylor'},
                {name: 'APA Free E-Books', id: 'apa'}
            ]
        },
        'saylor': {
            id: 'saylor',
            name: 'Saylor Academy - Psychology Textbooks',
            logo: 'logo/saylor.png',
            url: 'https://learn.saylor.org/course/psych101',
            shortDescription: '免费心理学课程与教材下载，涵盖心理学导论。',
            shortDescription_en: 'Free psychology courses and textbook downloads covering introduction to psychology.',
            fullDescription: 'Saylor Academy是一个非营利组织，提供免费的在线课程和教材，包括全面的心理学资源。其心理学课程包括心理学导论、发展心理学、社会心理学等，每门课程都配有免费的电子教材和学习资源。这些教材经过精心策划，内容全面且符合大学水平的学术标准。学习者可以按照自己的节奏学习，完成课程后还可以获得免费的结业证书。Saylor Academy的心理学教材采用开放教育资源，可以自由下载和使用，没有任何费用。这些资源特别适合自学者、预算有限的学生以及希望提供免费教育资源的教育工作者。Saylor的课程设计注重实用性和可访问性，使心理学知识对广泛的受众开放。',
            fullDescription_en: 'Saylor Academy is a non-profit organization offering free online courses and textbooks, including comprehensive psychology resources. Its psychology courses include introduction to psychology, developmental psychology, social psychology, and more, each equipped with free electronic textbooks and learning resources. These textbooks are carefully curated, comprehensive, and meet college-level academic standards. Learners can study at their own pace and receive free completion certificates after finishing courses. Saylor Academy\'s psychology textbooks use open educational resources that can be freely downloaded and used without any cost. These resources are particularly suitable for self-learners, budget-conscious students, and educators wishing to provide free educational resources. Saylor\'s course design emphasizes practicality and accessibility, making psychological knowledge available to a wide audience.',
            tags: ['免费课程', '开放教育资源', '自定进度', '结业证书'],
            tags_en: ['Free Courses', 'Open Educational Resources', 'Self-paced', 'Completion Certificates'],
            targetAudience: [
                '自学者 - 寻求结构化的心理学学习',
                '预算有限的学生 - 需要免费教育资源',
                '继续教育学习者 - 拓展知识领域',
                '教育工作者 - 寻找补充教学材料',
                '职业发展人士 - 获取心理学基础知识'
            ],
            targetAudience_en: [
                'Self-learners - Seeking structured psychology learning',
                'Budget-conscious students - Needing free educational resources',
                'Continuing education learners - Expanding knowledge areas',
                'Educators - Finding supplementary teaching materials',
                'Career development professionals - Acquiring basic psychology knowledge'
            ],
            relatedResources: [
                {name: 'OpenStax Psychology 2e', id: 'openstax'},
                {name: 'Noba Project - Free Psychology Textbook', id: 'noba'},
                {name: 'MIT OpenCourseWare - Psychology', id: 'mit'}
            ]
        },
        'apa': {
            id: 'apa',
            name: 'APA Free E-Books',
            logo: 'logo/apa.png',
            url: 'https://www.apa.org/pubs/books/browse?query=&fq=DocumentType:%27Book%27%20AND%20(HasFullText:%27true%27)',
            shortDescription: '美国心理学协会提供的免费电子书和开放获取资源。',
            shortDescription_en: 'Free e-books and open access resources provided by the American Psychological Association.',
            fullDescription: 'APA（美国心理学协会）提供一系列免费电子书和开放获取资源，为心理学学生、研究人员和专业人士提供高质量的学术内容。这些资源涵盖了心理学的多个领域，包括临床心理学、研究方法、教育心理学、社会心理学等。APA的免费电子书由该领域的专家撰写，遵循严格的学术标准和同行评审过程。除了电子书外，APA还提供开放获取的期刊文章、研究报告和教育资源。这些材料可以通过APA的网站免费访问，部分资源需要简单注册。APA的开放资源特别有价值，因为它们代表了心理学领域的权威声音，提供了最新的研究发现和专业指导。',
            fullDescription_en: 'The American Psychological Association (APA) offers a range of free e-books and open access resources, providing high-quality academic content for psychology students, researchers, and professionals. These resources cover multiple areas of psychology, including clinical psychology, research methods, educational psychology, social psychology, and more. APA\'s free e-books are written by experts in the field and follow rigorous academic standards and peer-review processes. In addition to e-books, APA also provides open access journal articles, research reports, and educational resources. These materials can be accessed for free through APA\'s website, with some resources requiring simple registration. APA\'s open resources are particularly valuable as they represent authoritative voices in the field of psychology, offering the latest research findings and professional guidance.',
            tags: ['专业资源', '开放获取', '学术标准', '研究资料'],
            tags_en: ['Professional Resources', 'Open Access', 'Academic Standards', 'Research Materials'],
            targetAudience: [
                '心理学研究人员 - 获取最新研究资源',
                '心理学专业学生 - 补充学术阅读',
                '心理健康专业人士 - 获取专业指导',
                '教育工作者 - 寻找高质量教学材料',
                '心理学爱好者 - 获取权威信息'
            ],
            targetAudience_en: [
                'Psychology researchers - Accessing latest research resources',
                'Psychology students - Supplementing academic reading',
                'Mental health professionals - Obtaining professional guidance',
                'Educators - Finding high-quality teaching materials',
                'Psychology enthusiasts - Accessing authoritative information'
            ],
            relatedResources: [
                {name: 'OpenStax Psychology 2e', id: 'openstax'},
                {name: 'Noba Project - Free Psychology Textbook', id: 'noba'},
                {name: 'BCcampus OpenEd', id: 'bccampus'}
            ]
        },
        'bccampus': {
            id: 'bccampus',
            name: 'BCcampus OpenEd',
            logo: 'logo/BC.png',
            url: 'https://open.bccampus.ca/browse-our-collection/find-open-textbooks/?subject=Psychology',
            shortDescription: '加拿大开放教育资源，提供多种心理学开放教材。',
            shortDescription_en: 'Canadian open educational resources offering various psychology open textbooks.',
            fullDescription: 'BCcampus OpenEd是加拿大不列颠哥伦比亚省的一个开放教育资源项目，提供多种高质量的心理学开放教材。这个平台收集和开发了各种心理学教材，包括心理学导论、发展心理学、异常心理学等多个领域。所有教材均采用开放许可，可以免费下载、修改和分享。BCcampus的教材由专业教育者编写和审核，确保内容的准确性和教育价值。这些资源支持多种格式，包括PDF、EPUB和在线阅读，方便不同设备和学习偏好的用户。BCcampus还提供辅助资源，如教学指南、测验题库和幻灯片，帮助教育者有效地使用这些开放教材。该平台特别关注加拿大和北美的教育环境，但其资源对全球学习者同样有价值。',
            fullDescription_en: 'BCcampus OpenEd is an open educational resource project from British Columbia, Canada, offering various high-quality psychology open textbooks. This platform collects and develops a range of psychology textbooks, including introduction to psychology, developmental psychology, abnormal psychology, and many other fields. All textbooks use open licenses and can be freely downloaded, modified, and shared. BCcampus textbooks are written and reviewed by professional educators, ensuring content accuracy and educational value. These resources support multiple formats, including PDF, EPUB, and online reading, accommodating users with different devices and learning preferences. BCcampus also provides supplementary resources such as teaching guides, quiz banks, and slides to help educators effectively use these open textbooks. The platform particularly focuses on Canadian and North American educational environments, but its resources are equally valuable to global learners.',
            tags: ['开放教育资源', '加拿大资源', '多种格式', '教学辅助材料'],
            tags_en: ['Open Educational Resources', 'Canadian Resources', 'Multiple Formats', 'Teaching Support Materials'],
            targetAudience: [
                '加拿大高校学生 - 获取本地化心理学资源',
                '心理学教育者 - 寻找可定制的教学材料',
                '国际学习者 - 获取北美视角的心理学知识',
                '教育机构 - 降低教材成本',
                '开放教育倡导者 - 支持和使用开放资源'
            ],
            targetAudience_en: [
                'Canadian college students - Accessing localized psychology resources',
                'Psychology educators - Finding customizable teaching materials',
                'International learners - Gaining North American perspectives on psychology',
                'Educational institutions - Reducing textbook costs',
                'Open education advocates - Supporting and using open resources'
            ],
            relatedResources: [
                {name: 'OpenStax Psychology 2e', id: 'openstax'},
                {name: 'Noba Project - Free Psychology Textbook', id: 'noba'},
                {name: 'APA Free E-Books', id: 'apa'}
            ]
        },
        'archive': {
            id: 'archive',
            name: 'Internet Archive - Psychology Books',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Internet_Archive_logo_and_wordmark.svg/1200px-Internet_Archive_logo_and_wordmark.svg.png',
            url: 'https://archive.org/details/texts?query=psychology&sin=',
            shortDescription: '互联网档案馆收藏的心理学书籍，包括经典著作和历史文献。',
            shortDescription_en: 'Psychology books collected by the Internet Archive, including classic works and historical documents.',
            fullDescription: 'Internet Archive（互联网档案馆）是一个非营利性数字图书馆，提供大量免费的心理学书籍和资源。其心理学收藏包括经典著作、历史文献、学术期刊和现代教材。这个平台的独特之处在于它保存了许多已经进入公共领域的心理学经典著作，如威廉·詹姆斯、弗洛伊德、荣格等先驱者的原始著作。用户可以在线阅读这些资源，也可以下载多种格式，包括PDF、EPUB和Kindle格式。Internet Archive还提供了强大的搜索功能，允许用户按主题、作者、时间段等筛选心理学资源。对于研究历史心理学、理论发展或寻找原始资料的学者和学生来说，这是一个宝贵的资源库。该平台的开放性使得珍贵的心理学知识能够被全球用户自由获取。',
            fullDescription_en: 'The Internet Archive is a non-profit digital library offering a vast collection of free psychology books and resources. Its psychology collection includes classic works, historical documents, academic journals, and modern textbooks. What makes this platform unique is its preservation of many psychology classics that have entered the public domain, such as original works by pioneers like William James, Freud, Jung, and others. Users can read these resources online or download them in various formats, including PDF, EPUB, and Kindle formats. The Internet Archive also provides powerful search functionality, allowing users to filter psychology resources by topic, author, time period, and more. For scholars and students researching historical psychology, theoretical developments, or seeking original materials, this is an invaluable repository. The platform\'s openness makes precious psychological knowledge freely accessible to users worldwide.',
            tags: ['数字图书馆', '历史文献', '公共领域', '多格式下载'],
            tags_en: ['Digital Library', 'Historical Documents', 'Public Domain', 'Multi-format Downloads'],
            targetAudience: [
                '心理学历史研究者 - 获取原始历史文献',
                '心理学理论学习者 - 阅读经典原著',
                '学术研究人员 - 寻找参考资料',
                '心理学爱好者 - 免费获取广泛资源',
                '教育工作者 - 寻找补充教学材料'
            ],
            targetAudience_en: [
                'Psychology history researchers - Accessing original historical documents',
                'Psychology theory learners - Reading classic original works',
                'Academic researchers - Finding reference materials',
                'Psychology enthusiasts - Freely accessing wide-ranging resources',
                'Educators - Seeking supplementary teaching materials'
            ],
            relatedResources: [
                {name: 'OpenStax Psychology 2e', id: 'openstax'},
                {name: 'APA Free E-Books', id: 'apa'},
                {name: 'Noba Project - Free Psychology Textbook', id: 'noba'}
            ]
        },
        'yale': {
            id: 'yale',
            name: 'Yale University Open Courses',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Yale_University_logo.svg/1200px-Yale_University_logo.svg.png',
            url: 'https://oyc.yale.edu/psychology',
            shortDescription: '耶鲁大学开放课程，包含心理学导论等经典课程，由知名教授讲授。',
            shortDescription_en: 'Yale University Open Courses, including classic courses like Introduction to Psychology, taught by renowned professors.',
            fullDescription: '耶鲁大学开放课程是耶鲁大学提供的免费在线教育资源，其中包含了多门高质量的心理学课程。最著名的是由保罗·布鲁姆教授讲授的《心理学导论》，这门课程全面介绍了心理学的主要领域和理论，包括感知、认知、发展、社会心理学、临床心理学等。耶鲁开放课程提供完整的视频讲座、课程大纲和补充阅读材料，让学习者能够深入了解心理学的基础知识和前沿研究。这些课程由耶鲁大学的顶尖教授讲授，保持了耶鲁教育的高标准和严谨性。所有资源完全免费，没有注册要求，但不提供学分或证书。',
            fullDescription_en: 'Yale University Open Courses are free online educational resources provided by Yale University, which include multiple high-quality psychology courses. The most famous is "Introduction to Psychology" taught by Professor Paul Bloom, which comprehensively introduces the main fields and theories of psychology, including perception, cognition, development, social psychology, clinical psychology, and more. Yale Open Courses provide complete video lectures, course syllabi, and supplementary reading materials, allowing learners to gain an in-depth understanding of the fundamentals and cutting-edge research in psychology. These courses are taught by Yale University\'s top professors, maintaining Yale\'s high standards and academic rigor. All resources are completely free with no registration requirements, although no credits or certificates are provided.',
            tags: ['开放教育资源', '视频讲座', '心理学导论', '免费'],
            tags_en: ['Open Educational Resources', 'Video Lectures', 'Introduction to Psychology', 'Free'],
            targetAudience: [
                '心理学初学者 - 寻求系统的入门课程',
                '大学生 - 需要补充学习材料',
                '教育工作者 - 寻找教学资源和教学方法',
                '自学者 - 希望从顶尖大学获取知识',
                '对心理学有一般兴趣的公众'
            ],
            targetAudience_en: [
                'Psychology beginners - Seeking systematic introductory courses',
                'College students - Needing supplementary study materials',
                'Educators - Looking for teaching resources and methods',
                'Self-learners - Wanting to acquire knowledge from top universities',
                'General public with an interest in psychology'
            ],
            relatedResources: [
                {name: 'MIT OpenCourseWare - Psychology', id: 'mit'},
                {name: 'Harvard University Online Courses', id: 'harvard'},
                {name: 'Coursera - Psychology', id: 'coursera'}
            ]
        },
        'harvard': {
            id: 'harvard',
            name: 'Harvard University Online Courses',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/320px-Harvard_University_logo.svg.png',
            url: 'https://online-learning.harvard.edu/subject/psychology',
            shortDescription: '哈佛大学在线课程，提供认知心理学、积极心理学等专业课程。',
            shortDescription_en: 'Harvard University Online Courses, offering professional courses in cognitive psychology, positive psychology, and more.',
            fullDescription: '哈佛大学在线学习平台提供了多种形式的心理学课程，包括免费的开放课程和付费的专业证书课程。哈佛的心理学课程涵盖了认知心理学、积极心理学、发展心理学、社会心理学等多个领域，由哈佛大学著名教授和研究人员讲授。特别值得一提的是哈佛的积极心理学课程，这是该领域的开创性课程之一，探讨了幸福、韧性和个人成长等主题。哈佛在线课程采用多种教学方法，包括视频讲座、案例研究、互动练习和同伴讨论。付费课程提供导师支持、作业评分和完成证书，而免费课程则允许学习者自主学习课程内容。',
            fullDescription_en: 'Harvard University\'s online learning platform offers various forms of psychology courses, including free open courses and paid professional certificate courses. Harvard\'s psychology courses cover cognitive psychology, positive psychology, developmental psychology, social psychology, and other fields, taught by renowned Harvard University professors and researchers. Particularly noteworthy is Harvard\'s positive psychology course, one of the pioneering courses in this field, exploring topics such as happiness, resilience, and personal growth. Harvard online courses employ various teaching methods, including video lectures, case studies, interactive exercises, and peer discussions. Paid courses provide mentor support, assignment grading, and completion certificates, while free courses allow learners to study course content independently.',
            tags: ['名校课程', '积极心理学', '专业证书', '多种形式'],
            tags_en: ['Prestigious University Courses', 'Positive Psychology', 'Professional Certificates', 'Various Formats'],
            targetAudience: [
                '专业心理学从业者 - 寻求继续教育',
                '研究生和高级本科生 - 需要深入的专业知识',
                '教育工作者和咨询师 - 希望应用积极心理学',
                '人力资源专业人士 - 学习组织心理学',
                '健康和福祉领域的专业人士'
            ],
            targetAudience_en: [
                'Professional psychology practitioners - Seeking continuing education',
                'Graduate and advanced undergraduate students - Needing in-depth professional knowledge',
                'Educators and counselors - Wanting to apply positive psychology',
                'Human resources professionals - Learning organizational psychology',
                'Health and wellness field professionals'
            ],
            relatedResources: [
                {name: 'Yale University Open Courses', id: 'yale'},
                {name: 'edX - Psychology', id: 'edx'},
                {name: 'Positive Psychology Center', id: 'positive-psych'}
            ]
        },
        'berkeley': {
            id: 'berkeley',
            name: 'UC Berkeley Online Learning',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Seal_of_University_of_California%2C_Berkeley.svg/1200px-Seal_of_University_of_California%2C_Berkeley.svg.png',
            url: 'https://extension.berkeley.edu/public/category/courseCategoryCertificateProfile.do?method=load&certificateId=17177',
            shortDescription: '加州大学伯克利分校在线学习平台，提供心理学证书项目和专业课程。',
            shortDescription_en: 'UC Berkeley Online Learning platform, offering psychology certificate programs and professional courses.',
            fullDescription: '加州大学伯克利分校的在线学习平台提供了全面的心理学课程和证书项目。伯克利的心理学课程以其严谨的科学方法和创新研究而闻名，涵盖了认知心理学、发展心理学、社会心理学、临床心理学和神经科学等领域。伯克利提供专业证书项目，如"临床心理学基础"和"发展心理学"，这些项目由伯克利的教授和行业专家设计和教授。课程采用多种教学方法，包括视频讲座、案例分析、研究项目和小组讨论。伯克利的在线课程特别强调将理论与实践相结合，帮助学习者将心理学知识应用到实际工作和生活中。完成证书项目的学生将获得伯克利大学的正式认证，这在学术和职业发展中具有很高的价值。',
            fullDescription_en: 'The University of California, Berkeley\'s online learning platform offers comprehensive psychology courses and certificate programs. Berkeley\'s psychology courses are renowned for their rigorous scientific methods and innovative research, covering fields such as cognitive psychology, developmental psychology, social psychology, clinical psychology, and neuroscience. Berkeley offers professional certificate programs, such as "Foundations of Clinical Psychology" and "Developmental Psychology," designed and taught by Berkeley professors and industry experts. Courses utilize various teaching methods, including video lectures, case analyses, research projects, and group discussions. Berkeley\'s online courses particularly emphasize combining theory with practice, helping learners apply psychological knowledge to their work and life. Students who complete certificate programs receive formal certification from UC Berkeley, which holds high value in academic and career development.',
            tags: ['证书项目', '应用心理学', '研究方法', '专业发展'],
            tags_en: ['Certificate Programs', 'Applied Psychology', 'Research Methods', 'Professional Development'],
            targetAudience: [
                '心理健康专业人士 - 寻求专业发展和认证',
                '职业转换者 - 希望进入心理学领域',
                '研究人员和学者 - 学习先进的研究方法',
                '教育工作者 - 应用心理学原理改进教学',
                '人力资源和组织发展专业人士'
            ],
            targetAudience_en: [
                'Mental health professionals - Seeking professional development and certification',
                'Career changers - Wanting to enter the field of psychology',
                'Researchers and scholars - Learning advanced research methods',
                'Educators - Applying psychological principles to improve teaching',
                'Human resources and organizational development professionals'
            ],
            relatedResources: [
                {name: 'edX - Psychology', id: 'edx'},
                {name: 'Harvard University Online Courses', id: 'harvard'},
                {name: 'Stanford Online', id: 'stanford'}
            ]
        },
        // 2.2.1 心理测验
        'openpsychometrics': {
            id: 'openpsychometrics',
            name: 'OpenPsychometrics',
            logo: 'https://openpsychometrics.org/images/logo.png',
            url: 'https://openpsychometrics.org/',
            shortDescription: '免费心理测验平台，提供大五人格、MBTI、智力测验等。',
            shortDescription_en: 'Free psychological testing platform offering Big Five personality, MBTI, intelligence tests, etc.',
            fullDescription: 'OpenPsychometrics是一个免费的在线心理测验平台，提供各种经过科学验证的心理测试。该平台包含大五人格测试、MBTI类型指标、智力测验、情绪智力测试等多种评估工具。所有测试都基于心理学研究和统计学原理，为用户提供准确可靠的结果。平台特别适合个人自我了解、学术研究和教育用途。测试结果详细且易于理解，包含个性化的解释和建议。OpenPsychometrics致力于让心理测验变得更加普及和易于获取，同时保持科学严谨性。',
            fullDescription_en: 'OpenPsychometrics is a free online psychological testing platform that offers various scientifically validated psychological tests. The platform includes Big Five personality tests, MBTI-type indicators, intelligence tests, emotional intelligence assessments, and many other evaluation tools. All tests are based on psychological research and statistical principles, providing users with accurate and reliable results. The platform is particularly suitable for personal self-understanding, academic research, and educational purposes. Test results are detailed and easy to understand, including personalized interpretations and recommendations. OpenPsychometrics is committed to making psychological testing more accessible while maintaining scientific rigor.',
            tags: ['免费测验', '人格测试', '智力测验', '科学验证'],
            tags_en: ['Free Tests', 'Personality Tests', 'Intelligence Tests', 'Scientifically Validated'],
            targetAudience: [
                '个人用户 - 寻求自我了解和个人发展',
                '学生和研究者 - 进行心理学研究',
                '教育工作者 - 教学和演示用途',
                '心理健康专业人士 - 辅助评估工具'
            ],
            targetAudience_en: [
                'Individual users - Seeking self-understanding and personal development',
                'Students and researchers - Conducting psychological research',
                'Educators - For teaching and demonstration purposes',
                'Mental health professionals - Auxiliary assessment tools'
            ],
            relatedResources: [
                {name: 'Truity', id: 'truity'},
                {name: '16Personalities', id: '16personalities'},
                {name: 'Big Five Test (IPIP)', id: 'ipip'}
            ]
        },
        'truity': {
            id: 'truity',
            name: 'Truity',
            logo: 'https://www.truity.com/sites/default/files/truity-logo.png',
            url: 'https://www.truity.com/',
            shortDescription: '国际知名测评平台，涵盖 MBTI、九型人格、大五等。',
            shortDescription_en: 'Internationally renowned assessment platform covering MBTI, Enneagram, Big Five, etc.',
            fullDescription: 'Truity是一个国际知名的心理测评平台，提供全面的人格和职业评估服务。平台涵盖MBTI人格类型测试、九型人格测试、大五人格测试、职业兴趣测试等多种专业评估工具。Truity的测试基于最新的心理学研究，由专业心理学家和测评专家开发。平台提供详细的测试报告，包含个性化的职业建议、人际关系指导和个人发展建议。Truity特别注重测试的实用性，帮助用户在职业选择、团队合作和个人成长方面做出更好的决策。',
            fullDescription_en: 'Truity is an internationally renowned psychological assessment platform that provides comprehensive personality and career assessment services. The platform covers MBTI personality type tests, Enneagram tests, Big Five personality tests, career interest tests, and various other professional assessment tools. Truity\'s tests are based on the latest psychological research and developed by professional psychologists and assessment experts. The platform provides detailed test reports, including personalized career advice, interpersonal relationship guidance, and personal development recommendations. Truity particularly emphasizes the practicality of tests, helping users make better decisions in career choices, teamwork, and personal growth.',
            tags: ['专业测评', 'MBTI', '九型人格', '职业指导'],
            tags_en: ['Professional Assessment', 'MBTI', 'Enneagram', 'Career Guidance'],
            targetAudience: [
                '职业发展者 - 寻求职业指导和规划',
                '团队领导者 - 了解团队成员特质',
                '人力资源专业人士 - 招聘和团队建设',
                '个人成长爱好者 - 深入了解自己'
            ],
            targetAudience_en: [
                'Career developers - Seeking career guidance and planning',
                'Team leaders - Understanding team member traits',
                'HR professionals - Recruitment and team building',
                'Personal growth enthusiasts - Deep self-understanding'
            ],
            relatedResources: [
                {name: 'OpenPsychometrics', id: 'openpsychometrics'},
                {name: '16Personalities', id: '16personalities'},
                {name: 'Queendom Tests', id: 'queendom'}
            ]
        },
        '16personalities': {
            id: '16personalities',
            name: '16Personalities',
            logo: 'https://static.neris-assets.com/images/personality-types/headers/analysts_The_Architect_INTJ_introduction.svg',
            url: 'https://www.16personalities.com/',
            shortDescription: '全球最流行的 MBTI 风格测评，界面友好。',
            shortDescription_en: 'World\'s most popular MBTI-style assessment with user-friendly interface.',
            fullDescription: '16Personalities是全球最受欢迎的MBTI风格人格测评平台，以其简洁友好的界面和准确的测试结果而闻名。该平台基于迈尔斯-布里格斯类型指标(MBTI)理论，将人格分为16种不同类型。测试包含约60个问题，通过分析用户的偏好和行为模式来确定人格类型。平台提供详细的人格描述、职业建议、人际关系指导和个人发展建议。16Personalities的特色在于其生动的人格描述和实用的生活应用建议，帮助数百万用户更好地了解自己和他人。',
            fullDescription_en: '16Personalities is the world\'s most popular MBTI-style personality assessment platform, renowned for its clean, user-friendly interface and accurate test results. The platform is based on the Myers-Briggs Type Indicator (MBTI) theory, categorizing personalities into 16 different types. The test includes approximately 60 questions, analyzing users\' preferences and behavioral patterns to determine personality type. The platform provides detailed personality descriptions, career advice, relationship guidance, and personal development recommendations. 16Personalities is characterized by its vivid personality descriptions and practical life application advice, helping millions of users better understand themselves and others.',
            tags: ['MBTI测试', '用户友好', '人格类型', '职业建议'],
            tags_en: ['MBTI Test', 'User Friendly', 'Personality Types', 'Career Advice'],
            targetAudience: [
                '个人用户 - 了解自己的人格类型',
                '学生 - 职业规划和专业选择',
                '职场人士 - 改善工作表现和人际关系',
                '团队管理者 - 了解团队动态'
            ],
            targetAudience_en: [
                'Individual users - Understanding their personality type',
                'Students - Career planning and major selection',
                'Working professionals - Improving work performance and relationships',
                'Team managers - Understanding team dynamics'
            ],
            relatedResources: [
                {name: 'Truity', id: 'truity'},
                {name: 'OpenPsychometrics', id: 'openpsychometrics'},
                {name: 'Psychology Today Tests', id: 'psychologytoday'}
            ]
        },
        'ipip': {
            id: 'ipip',
            name: 'Big Five Personality Test (IPIP-NEO)',
            logo: 'https://ipip.ori.org/images/ipip_logo.gif',
            url: 'https://www.personal.psu.edu/~j5j/IPIP/',
            shortDescription: '大五人格量表（IPIP-NEO），研究与教育常用。',
            shortDescription_en: 'Big Five personality scale (IPIP-NEO), commonly used in research and education.',
            fullDescription: 'IPIP-NEO大五人格测试是基于国际人格项目库(IPIP)开发的科学人格评估工具。该测试评估五个主要人格维度：开放性、尽责性、外向性、宜人性和神经质。IPIP-NEO被广泛用于心理学研究和教育领域，因其科学严谨性和可靠性而受到学者和研究者的认可。测试提供详细的人格分析报告，包含各维度的得分和解释。该工具特别适合学术研究、教育教学和专业心理评估，是心理学领域最权威的人格测试工具之一。',
            fullDescription_en: 'The IPIP-NEO Big Five personality test is a scientific personality assessment tool developed based on the International Personality Item Pool (IPIP). The test evaluates five major personality dimensions: Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism. IPIP-NEO is widely used in psychological research and education, recognized by scholars and researchers for its scientific rigor and reliability. The test provides detailed personality analysis reports, including scores and interpretations for each dimension. This tool is particularly suitable for academic research, educational teaching, and professional psychological assessment, being one of the most authoritative personality testing tools in the field of psychology.',
            tags: ['大五人格', '科研工具', '学术标准', '心理测量'],
            tags_en: ['Big Five', 'Research Tool', 'Academic Standard', 'Psychometrics'],
            targetAudience: [
                '心理学研究者 - 进行人格研究',
                '教育工作者 - 教学和演示',
                '心理健康专业人士 - 专业评估',
                '学生 - 学习心理测量学'
            ],
            targetAudience_en: [
                'Psychology researchers - Conducting personality research',
                'Educators - Teaching and demonstration',
                'Mental health professionals - Professional assessment',
                'Students - Learning psychometrics'
            ],
            relatedResources: [
                {name: 'OpenPsychometrics', id: 'openpsychometrics'},
                {name: 'PsyToolkit', id: 'psytoolkit'},
                {name: 'JASP', id: 'jasp'}
            ]
        },
        'psytest': {
            id: 'psytest',
            name: '心理测评中心（中国科学院心理研究所）',
            logo: 'https://www.psytest.cn/images/logo.png',
            url: 'http://www.psytest.cn/',
            shortDescription: '中文心理测评资源平台，含智力、人格、情绪量表。',
            shortDescription_en: 'Chinese psychological assessment resource platform with intelligence, personality, and emotion scales.',
            fullDescription: '中国科学院心理研究所心理测评中心是国内权威的心理测评资源平台，提供标准化的中文心理测验工具。平台涵盖智力测验、人格测验、情绪测验、认知能力测验等多个领域的专业量表。所有测验工具都经过严格的心理测量学验证，具有良好的信度和效度。该平台特别适合中国文化背景下的心理评估需求，为心理健康专业人士、教育工作者和研究人员提供可靠的测评工具。测评中心还提供专业的测评培训和技术支持服务。',
            fullDescription_en: 'The Psychological Assessment Center of the Institute of Psychology, Chinese Academy of Sciences is an authoritative psychological assessment resource platform in China, providing standardized Chinese psychological testing tools. The platform covers professional scales in multiple fields including intelligence tests, personality tests, emotion tests, and cognitive ability tests. All testing tools have undergone rigorous psychometric validation with good reliability and validity. This platform is particularly suitable for psychological assessment needs in the Chinese cultural context, providing reliable assessment tools for mental health professionals, educators, and researchers. The assessment center also provides professional assessment training and technical support services.',
            tags: ['中文测评', '权威机构', '标准化量表', '专业培训'],
            tags_en: ['Chinese Assessment', 'Authoritative Institution', 'Standardized Scales', 'Professional Training'],
            targetAudience: [
                '心理健康专业人士 - 临床和咨询评估',
                '教育工作者 - 学生心理评估',
                '人力资源专业人士 - 员工评估',
                '心理学研究者 - 中文量表研究'
            ],
            targetAudience_en: [
                'Mental health professionals - Clinical and counseling assessment',
                'Educators - Student psychological assessment',
                'HR professionals - Employee assessment',
                'Psychology researchers - Chinese scale research'
            ],
            relatedResources: [
                {name: 'OpenPsychometrics', id: 'openpsychometrics'},
                {name: 'PsyToolkit', id: 'psytoolkit'},
                {name: 'SPSS', id: 'spss'}
            ]
        },
        'queendom': {
            id: 'queendom',
            name: 'Queendom Tests',
            logo: 'https://www.queendom.com/images/queendom_logo.png',
            url: 'https://www.queendom.com/',
            shortDescription: '大量心理学在线测验（IQ、EQ、人格、职业兴趣等）。',
            shortDescription_en: 'Extensive online psychological tests (IQ, EQ, personality, career interests, etc.).',
            fullDescription: 'Queendom是一个综合性的在线心理测验平台，提供超过100种不同类型的心理测试。平台涵盖智商测试、情商测试、人格测试、职业兴趣测试、心理健康评估等多个领域。Queendom的测试设计专业，结果详细，为用户提供深入的自我了解和实用的生活指导。平台特别注重测试的趣味性和实用性，使心理测验变得更加有趣和易于理解。Queendom还提供专业版测试，为心理健康专业人士和研究者提供更深入的评估工具。',
            fullDescription_en: 'Queendom is a comprehensive online psychological testing platform offering over 100 different types of psychological tests. The platform covers IQ tests, EQ tests, personality tests, career interest tests, mental health assessments, and many other areas. Queendom\'s tests are professionally designed with detailed results, providing users with deep self-understanding and practical life guidance. The platform particularly emphasizes the fun and practicality of tests, making psychological testing more interesting and easy to understand. Queendom also offers professional version tests, providing more in-depth assessment tools for mental health professionals and researchers.',
            tags: ['多样测验', '在线测试', '趣味性', '实用指导'],
            tags_en: ['Diverse Tests', 'Online Testing', 'Fun', 'Practical Guidance'],
            targetAudience: [
                '个人用户 - 娱乐和自我了解',
                '学生 - 学习和探索',
                '职业规划者 - 职业兴趣探索',
                '心理健康专业人士 - 辅助评估'
            ],
            targetAudience_en: [
                'Individual users - Entertainment and self-understanding',
                'Students - Learning and exploration',
                'Career planners - Career interest exploration',
                'Mental health professionals - Auxiliary assessment'
            ],
            relatedResources: [
                {name: 'Truity', id: 'truity'},
                {name: 'Psychology Today Tests', id: 'psychologytoday'},
                {name: 'OpenPsychometrics', id: 'openpsychometrics'}
            ]
        },
        'psychologytoday': {
            id: 'psychologytoday',
            name: 'Psychology Today Tests',
            logo: 'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/2018-09/shutterstock_1156208652.jpg',
            url: 'https://www.psychologytoday.com/us/tests',
            shortDescription: '心理学主题测验：人格、情绪、恋爱、压力等。',
            shortDescription_en: 'Psychology-themed tests: personality, emotions, relationships, stress, etc.',
            fullDescription: 'Psychology Today Tests是知名心理学杂志《今日心理学》提供的在线测验平台。该平台专注于生活化的心理学测试，涵盖人格特质、情绪管理、恋爱关系、压力应对、心理健康等日常生活相关的主题。测试设计基于心理学理论和研究，但更注重实际应用和生活指导。平台提供的测试结果不仅包含科学分析，还提供实用的建议和改善策略。Psychology Today Tests特别适合希望将心理学知识应用到日常生活中的普通用户。',
            fullDescription_en: 'Psychology Today Tests is an online testing platform provided by the renowned psychology magazine "Psychology Today." The platform focuses on life-oriented psychological tests, covering topics related to daily life such as personality traits, emotion management, romantic relationships, stress coping, and mental health. Test designs are based on psychological theories and research but emphasize practical application and life guidance. The platform\'s test results include not only scientific analysis but also practical advice and improvement strategies. Psychology Today Tests is particularly suitable for ordinary users who want to apply psychological knowledge to their daily lives.',
            tags: ['主题测验', '生活应用', '实用建议', '心理健康'],
            tags_en: ['Themed Tests', 'Life Application', 'Practical Advice', 'Mental Health'],
            targetAudience: [
                '普通用户 - 改善生活质量',
                '情侣和夫妻 - 改善关系',
                '职场人士 - 压力管理',
                '心理健康关注者 - 自我监测'
            ],
            targetAudience_en: [
                'General users - Improving quality of life',
                'Couples - Improving relationships',
                'Working professionals - Stress management',
                'Mental health conscious individuals - Self-monitoring'
            ],
            relatedResources: [
                {name: 'Queendom Tests', id: 'queendom'},
                {name: '16Personalities', id: '16personalities'},
                {name: 'Verywell Mind', id: 'verywellmind'}
            ]
        },
        // 2.2.2 实验工具
        'psytoolkit': {
            id: 'psytoolkit',
            name: 'PsyToolkit',
            logo: 'https://www.psytoolkit.org/images/psytoolkit_logo.png',
            url: 'https://www.psytoolkit.org/',
            shortDescription: '免费在线心理实验与问卷工具，广泛用于科研与教学。',
            shortDescription_en: 'Free online psychological experiment and survey tool, widely used in research and teaching.',
            fullDescription: 'PsyToolkit是一个免费的在线心理实验和问卷制作平台，广泛应用于心理学研究和教学。该平台提供强大的实验设计工具，支持反应时实验、认知任务、问卷调查等多种研究方法。PsyToolkit的特色在于其简单易用的界面和强大的功能，研究者可以轻松创建复杂的心理学实验。平台支持数据收集、分析和导出，为研究者提供完整的研究解决方案。PsyToolkit还提供丰富的实验模板和教程，帮助初学者快速上手。该工具特别适合学术研究、教学演示和学生实践。',
            fullDescription_en: 'PsyToolkit is a free online psychological experiment and survey creation platform, widely used in psychological research and teaching. The platform provides powerful experiment design tools, supporting various research methods such as reaction time experiments, cognitive tasks, and questionnaire surveys. PsyToolkit\'s strength lies in its simple, user-friendly interface and powerful functionality, allowing researchers to easily create complex psychological experiments. The platform supports data collection, analysis, and export, providing researchers with complete research solutions. PsyToolkit also offers rich experiment templates and tutorials to help beginners get started quickly. This tool is particularly suitable for academic research, teaching demonstrations, and student practice.',
            tags: ['实验工具', '免费使用', '在线平台', '教学研究'],
            tags_en: ['Experiment Tool', 'Free to Use', 'Online Platform', 'Teaching & Research'],
            targetAudience: [
                '心理学研究者 - 设计和实施实验',
                '教育工作者 - 教学演示和实践',
                '学生 - 学习实验设计',
                '认知科学研究者 - 认知任务研究'
            ],
            targetAudience_en: [
                'Psychology researchers - Designing and implementing experiments',
                'Educators - Teaching demonstrations and practice',
                'Students - Learning experiment design',
                'Cognitive science researchers - Cognitive task research'
            ],
            relatedResources: [
                {name: 'PsychoPy', id: 'psychopy'},
                {name: 'Lab.js', id: 'labjs'},
                {name: 'Gorilla Experiment Builder', id: 'gorilla'}
            ]
        },
        'inquisit': {
            id: 'inquisit',
            name: 'Inquisit by Millisecond',
            logo: 'https://www.millisecond.com/images/inquisit_logo.png',
            url: 'https://www.millisecond.com/',
            shortDescription: '专业心理实验软件，支持复杂反应时实验。',
            shortDescription_en: 'Professional psychological experiment software supporting complex reaction time experiments.',
            fullDescription: 'Inquisit是由Millisecond公司开发的专业心理实验软件，专门用于设计和实施精确的心理学实验。该软件特别擅长反应时实验、认知任务和行为测量，提供毫秒级的时间精度。Inquisit支持复杂的实验设计，包括条件随机化、刺激呈现控制、数据收集和分析等功能。软件提供丰富的实验模板库，涵盖经典的心理学实验范式。Inquisit被全球众多研究机构和大学使用，是心理学和认知科学研究的标准工具之一。软件支持多平台运行，包括Windows、Mac和Web版本。',
            fullDescription_en: 'Inquisit is professional psychological experiment software developed by Millisecond, specifically designed for creating and implementing precise psychological experiments. The software particularly excels in reaction time experiments, cognitive tasks, and behavioral measurements, providing millisecond-level timing precision. Inquisit supports complex experimental designs, including condition randomization, stimulus presentation control, data collection, and analysis functions. The software provides a rich library of experiment templates covering classic psychological experimental paradigms. Inquisit is used by numerous research institutions and universities worldwide, being one of the standard tools for psychology and cognitive science research. The software supports multi-platform operation, including Windows, Mac, and Web versions.',
            tags: ['专业软件', '反应时实验', '精确测量', '认知任务'],
            tags_en: ['Professional Software', 'Reaction Time Experiments', 'Precise Measurement', 'Cognitive Tasks'],
            targetAudience: [
                '专业研究者 - 高精度实验需求',
                '认知心理学家 - 认知过程研究',
                '神经科学研究者 - 行为测量',
                '实验心理学实验室 - 标准化实验'
            ],
            targetAudience_en: [
                'Professional researchers - High-precision experiment needs',
                'Cognitive psychologists - Cognitive process research',
                'Neuroscience researchers - Behavioral measurement',
                'Experimental psychology labs - Standardized experiments'
            ],
            relatedResources: [
                {name: 'PsychoPy', id: 'psychopy'},
                {name: 'MATLAB (Psychtoolbox)', id: 'psychtoolbox'},
                {name: 'PsyToolkit', id: 'psytoolkit'}
            ]
        },
        'psychopy': {
            id: 'psychopy',
            name: 'PsychoPy',
            logo: 'https://www.psychopy.org/_static/psychopyDocBanner2.gif',
            url: 'https://www.psychopy.org/',
            shortDescription: '免费开源实验设计工具，广泛用于心理学与神经科学。',
            shortDescription_en: 'Free open-source experiment design tool, widely used in psychology and neuroscience.',
            fullDescription: 'PsychoPy是一个免费开源的心理学实验设计软件，广泛应用于心理学、神经科学和认知科学研究。该软件提供图形化的实验构建界面和Python编程接口，适合不同技术水平的研究者使用。PsychoPy支持各种类型的实验，包括视觉实验、听觉实验、反应时测量、眼动追踪等。软件具有强大的刺激呈现能力，支持复杂的视觉和听觉刺激。PsychoPy还提供精确的时间控制和数据收集功能，确保实验结果的可靠性。作为开源软件，PsychoPy拥有活跃的社区支持和丰富的文档资源。',
            fullDescription_en: 'PsychoPy is a free open-source psychology experiment design software, widely used in psychology, neuroscience, and cognitive science research. The software provides both a graphical experiment building interface and Python programming interface, suitable for researchers of different technical levels. PsychoPy supports various types of experiments, including visual experiments, auditory experiments, reaction time measurements, and eye tracking. The software has powerful stimulus presentation capabilities, supporting complex visual and auditory stimuli. PsychoPy also provides precise timing control and data collection functions, ensuring the reliability of experimental results. As open-source software, PsychoPy has active community support and rich documentation resources.',
            tags: ['开源工具', '实验设计', 'Python编程', '神经科学'],
            tags_en: ['Open Source', 'Experiment Design', 'Python Programming', 'Neuroscience'],
            targetAudience: [
                '心理学研究者 - 各类实验设计',
                '神经科学研究者 - 行为实验',
                '认知科学研究者 - 认知任务',
                '学生和教师 - 学习和教学'
            ],
            targetAudience_en: [
                'Psychology researchers - Various experiment designs',
                'Neuroscience researchers - Behavioral experiments',
                'Cognitive science researchers - Cognitive tasks',
                'Students and teachers - Learning and teaching'
            ],
            relatedResources: [
                {name: 'PsyToolkit', id: 'psytoolkit'},
                {name: 'Lab.js', id: 'labjs'},
                {name: 'Inquisit', id: 'inquisit'}
            ]
        },
        'gorilla': {
            id: 'gorilla',
            name: 'Gorilla Experiment Builder',
            logo: 'https://gorilla.sc/assets/img/gorilla-logo.png',
            url: 'https://gorilla.sc/',
            shortDescription: '在线实验平台，支持行为实验和认知任务。',
            shortDescription_en: 'Online experiment platform supporting behavioral experiments and cognitive tasks.',
            fullDescription: 'Gorilla Experiment Builder是一个专业的在线实验平台，专门用于创建和运行心理学和认知科学实验。该平台提供直观的拖拽式实验构建界面，无需编程知识即可创建复杂的实验。Gorilla支持各种实验类型，包括行为实验、认知任务、问卷调查和眼动追踪实验。平台提供强大的参与者管理和数据收集功能，支持在线招募和远程实验。Gorilla还提供实时数据监控和分析工具，帮助研究者及时了解实验进展。该平台特别适合需要大规模数据收集的研究项目。',
            fullDescription_en: 'Gorilla Experiment Builder is a professional online experiment platform specifically designed for creating and running psychology and cognitive science experiments. The platform provides an intuitive drag-and-drop experiment building interface, allowing complex experiments to be created without programming knowledge. Gorilla supports various experiment types, including behavioral experiments, cognitive tasks, questionnaire surveys, and eye-tracking experiments. The platform provides powerful participant management and data collection functions, supporting online recruitment and remote experiments. Gorilla also offers real-time data monitoring and analysis tools, helping researchers stay informed about experiment progress. This platform is particularly suitable for research projects requiring large-scale data collection.',
            tags: ['在线平台', '认知任务', '远程实验', '数据收集'],
            tags_en: ['Online Platform', 'Cognitive Tasks', 'Remote Experiments', 'Data Collection'],
            targetAudience: [
                '心理学研究者 - 在线实验需求',
                '认知科学研究者 - 认知任务研究',
                '社会心理学研究者 - 大规模调查',
                '教育研究者 - 学习行为研究'
            ],
            targetAudience_en: [
                'Psychology researchers - Online experiment needs',
                'Cognitive science researchers - Cognitive task research',
                'Social psychology researchers - Large-scale surveys',
                'Education researchers - Learning behavior research'
            ],
            relatedResources: [
                {name: 'PsyToolkit', id: 'psytoolkit'},
                {name: 'Lab.js', id: 'labjs'},
                {name: 'PsychoPy', id: 'psychopy'}
            ]
        },
        'labjs': {
            id: 'labjs',
            name: 'Lab.js',
            logo: 'https://lab.js.org/img/logo.png',
            url: 'https://lab.js.org/',
            shortDescription: '开源网页实验工具，可在浏览器运行心理实验。',
            shortDescription_en: 'Open-source web experiment tool that can run psychological experiments in browsers.',
            fullDescription: 'Lab.js是一个开源的网页实验构建工具，专门用于在浏览器中创建和运行心理学实验。该工具提供图形化的实验设计界面，同时支持JavaScript编程，适合不同技术水平的研究者。Lab.js的优势在于其轻量级设计和跨平台兼容性，实验可以在任何现代浏览器中运行。工具支持各种实验范式，包括反应时实验、问卷调查、认知任务等。Lab.js还提供数据导出和分析功能，与常用的统计软件兼容。作为开源项目，Lab.js完全免费使用，并有活跃的开发者社区支持。',
            fullDescription_en: 'Lab.js is an open-source web experiment building tool specifically designed for creating and running psychological experiments in browsers. The tool provides a graphical experiment design interface while also supporting JavaScript programming, suitable for researchers of different technical levels. Lab.js\'s advantage lies in its lightweight design and cross-platform compatibility, with experiments running in any modern browser. The tool supports various experimental paradigms, including reaction time experiments, questionnaire surveys, and cognitive tasks. Lab.js also provides data export and analysis functions, compatible with commonly used statistical software. As an open-source project, Lab.js is completely free to use and has active developer community support.',
            tags: ['网页实验', '开源免费', '跨平台', 'JavaScript'],
            tags_en: ['Web Experiments', 'Open Source Free', 'Cross-platform', 'JavaScript'],
            targetAudience: [
                '心理学研究者 - 网页实验需求',
                '学生 - 学习实验设计',
                '教育工作者 - 教学演示',
                '开发者 - 自定义实验工具'
            ],
            targetAudience_en: [
                'Psychology researchers - Web experiment needs',
                'Students - Learning experiment design',
                'Educators - Teaching demonstrations',
                'Developers - Custom experiment tools'
            ],
            relatedResources: [
                {name: 'PsyToolkit', id: 'psytoolkit'},
                {name: 'PsychoPy', id: 'psychopy'},
                {name: 'Gorilla Experiment Builder', id: 'gorilla'}
            ]
        },
        'expyriment': {
            id: 'expyriment',
            name: 'Expyriment',
            logo: 'https://www.expyriment.org/_static/expyriment_logo.png',
            url: 'https://www.expyriment.org/',
            shortDescription: 'Python 实验框架，适合行为科学研究。',
            shortDescription_en: 'Python experiment framework suitable for behavioral science research.',
            fullDescription: 'Expyriment是一个基于Python的轻量级实验框架，专门为行为科学和心理学研究设计。该框架提供简洁的API和强大的功能，支持各种类型的心理学实验。Expyriment的设计理念是简单易用，同时保持足够的灵活性来满足复杂的实验需求。框架支持精确的时间控制、多媒体刺激呈现、用户输入处理和数据记录。Expyriment特别适合需要精确控制的实验，如反应时研究、知觉实验和认知任务。作为Python库，Expyriment可以与其他科学计算库无缝集成，为研究者提供完整的实验和分析解决方案。',
            fullDescription_en: 'Expyriment is a lightweight Python-based experiment framework specifically designed for behavioral science and psychology research. The framework provides a clean API and powerful functionality, supporting various types of psychological experiments. Expyriment\'s design philosophy is simplicity and ease of use, while maintaining sufficient flexibility to meet complex experimental needs. The framework supports precise timing control, multimedia stimulus presentation, user input handling, and data recording. Expyriment is particularly suitable for experiments requiring precise control, such as reaction time research, perception experiments, and cognitive tasks. As a Python library, Expyriment can seamlessly integrate with other scientific computing libraries, providing researchers with complete experimental and analysis solutions.',
            tags: ['Python框架', '行为科学', '精确控制', '轻量级'],
            tags_en: ['Python Framework', 'Behavioral Science', 'Precise Control', 'Lightweight'],
            targetAudience: [
                'Python程序员 - 实验开发',
                '行为科学研究者 - 精确实验',
                '认知心理学家 - 认知任务',
                '研究生和博士生 - 学术研究'
            ],
            targetAudience_en: [
                'Python programmers - Experiment development',
                'Behavioral science researchers - Precise experiments',
                'Cognitive psychologists - Cognitive tasks',
                'Graduate and PhD students - Academic research'
            ],
            relatedResources: [
                {name: 'PsychoPy', id: 'psychopy'},
                {name: 'MATLAB (Psychtoolbox)', id: 'psychtoolbox'},
                {name: 'R Project', id: 'rproject'}
            ]
        },
        // 2.2.3 数据分析软件
        'spss': {
            id: 'spss',
            name: 'SPSS',
            logo: 'https://www.ibm.com/content/dam/adobe-cms/instana/media_logo/SPSS_Logo.png',
            url: 'https://www.ibm.com/products/spss-statistics',
            shortDescription: '最常用的心理学统计软件（商业版）。',
            shortDescription_en: 'Most commonly used statistical software in psychology (commercial version).',
            fullDescription: 'SPSS（Statistical Package for the Social Sciences）是心理学和社会科学领域最广泛使用的统计分析软件。该软件提供全面的统计分析功能，包括描述性统计、推断统计、多变量分析、回归分析等。SPSS的用户界面友好，采用菜单驱动的操作方式，使得没有编程背景的研究者也能轻松使用。软件支持多种数据格式，提供强大的数据管理和清理功能。SPSS还包含丰富的图表制作工具，帮助研究者可视化数据和结果。作为行业标准软件，SPSS被全球大多数心理学研究机构和大学使用。',
            fullDescription_en: 'SPSS (Statistical Package for the Social Sciences) is the most widely used statistical analysis software in psychology and social sciences. The software provides comprehensive statistical analysis functions, including descriptive statistics, inferential statistics, multivariate analysis, and regression analysis. SPSS has a user-friendly interface with menu-driven operations, making it easy for researchers without programming backgrounds to use. The software supports multiple data formats and provides powerful data management and cleaning functions. SPSS also includes rich charting tools to help researchers visualize data and results. As industry-standard software, SPSS is used by most psychology research institutions and universities worldwide.',
            tags: ['统计软件', '行业标准', '用户友好', '数据分析'],
            tags_en: ['Statistical Software', 'Industry Standard', 'User Friendly', 'Data Analysis'],
            targetAudience: [
                '心理学研究者 - 统计分析需求',
                '社会科学研究者 - 数据分析',
                '学生 - 学习统计学',
                '市场研究人员 - 调查数据分析'
            ],
            targetAudience_en: [
                'Psychology researchers - Statistical analysis needs',
                'Social science researchers - Data analysis',
                'Students - Learning statistics',
                'Market researchers - Survey data analysis'
            ],
            relatedResources: [
                {name: 'R Project', id: 'rproject'},
                {name: 'JASP', id: 'jasp'},
                {name: 'Jamovi', id: 'jamovi'}
            ]
        },
        'rproject': {
            id: 'rproject',
            name: 'R Project',
            logo: 'https://www.r-project.org/logo/Rlogo.png',
            url: 'https://www.r-project.org/',
            shortDescription: '免费开源统计语言，心理学科研常用。',
            shortDescription_en: 'Free open-source statistical language, commonly used in psychology research.',
            fullDescription: 'R是一个免费开源的统计计算和图形制作环境，在心理学和统计学研究中广泛使用。R提供强大的统计分析功能，支持从基础统计到高级建模的各种分析方法。作为编程语言，R具有极高的灵活性，研究者可以编写自定义函数和分析流程。R拥有庞大的包生态系统，涵盖心理测量学、实验设计、机器学习等各个领域。R的图形功能特别强大，可以创建高质量的科学图表和可视化。R还支持可重复研究，通过R Markdown等工具可以创建包含代码、结果和文档的完整报告。',
            fullDescription_en: 'R is a free open-source statistical computing and graphics environment, widely used in psychology and statistics research. R provides powerful statistical analysis functions, supporting various analysis methods from basic statistics to advanced modeling. As a programming language, R has extremely high flexibility, allowing researchers to write custom functions and analysis workflows. R has a vast package ecosystem covering various fields such as psychometrics, experimental design, and machine learning. R\'s graphics capabilities are particularly powerful, capable of creating high-quality scientific charts and visualizations. R also supports reproducible research, with tools like R Markdown enabling the creation of complete reports containing code, results, and documentation.',
            tags: ['开源免费', '统计语言', '可重复研究', '强大图形'],
            tags_en: ['Open Source Free', 'Statistical Language', 'Reproducible Research', 'Powerful Graphics'],
            targetAudience: [
                '统计学研究者 - 高级统计分析',
                '心理学研究者 - 数据科学方法',
                '数据科学家 - 统计建模',
                '学术研究者 - 可重复研究'
            ],
            targetAudience_en: [
                'Statistics researchers - Advanced statistical analysis',
                'Psychology researchers - Data science methods',
                'Data scientists - Statistical modeling',
                'Academic researchers - Reproducible research'
            ],
            relatedResources: [
                {name: 'JASP', id: 'jasp'},
                {name: 'Jamovi', id: 'jamovi'},
                {name: 'SPSS', id: 'spss'}
            ]
        },
        'jasp': {
            id: 'jasp',
            name: 'JASP',
            logo: 'https://jasp-stats.org/wp-content/themes/jasp/images/logo.svg',
            url: 'https://jasp-stats.org/',
            shortDescription: '免费开源统计软件，专为心理学设计，界面类似 SPSS。',
            shortDescription_en: 'Free open-source statistical software designed for psychology, interface similar to SPSS.',
            fullDescription: 'JASP是一个免费开源的统计软件，专门为心理学和社会科学研究设计。该软件提供类似SPSS的用户界面，但完全免费且开源。JASP特别注重贝叶斯统计方法，提供直观的贝叶斯分析工具。软件支持传统的频率统计和现代的贝叶斯统计，为研究者提供更全面的分析选择。JASP的设计理念是简单易用，同时保持统计分析的严谨性。软件提供实时结果更新、美观的图表输出和详细的分析报告。JASP还支持开放科学实践，促进研究的透明度和可重复性。',
            fullDescription_en: 'JASP is a free open-source statistical software specifically designed for psychology and social science research. The software provides a SPSS-like user interface but is completely free and open-source. JASP particularly emphasizes Bayesian statistical methods, providing intuitive Bayesian analysis tools. The software supports both traditional frequentist statistics and modern Bayesian statistics, offering researchers more comprehensive analysis options. JASP\'s design philosophy is simplicity and ease of use while maintaining statistical rigor. The software provides real-time result updates, beautiful chart outputs, and detailed analysis reports. JASP also supports open science practices, promoting research transparency and reproducibility.',
            tags: ['心理学专用', '贝叶斯统计', '免费开源', '易于使用'],
            tags_en: ['Psychology-specific', 'Bayesian Statistics', 'Free Open Source', 'Easy to Use'],
            targetAudience: [
                '心理学研究者 - 现代统计方法',
                '学生 - 学习贝叶斯统计',
                '教育工作者 - 教学演示',
                '开放科学倡导者 - 透明研究'
            ],
            targetAudience_en: [
                'Psychology researchers - Modern statistical methods',
                'Students - Learning Bayesian statistics',
                'Educators - Teaching demonstrations',
                'Open science advocates - Transparent research'
            ],
            relatedResources: [
                {name: 'R Project', id: 'rproject'},
                {name: 'Jamovi', id: 'jamovi'},
                {name: 'SPSS', id: 'spss'}
            ]
        },
        'jamovi': {
            id: 'jamovi',
            name: 'Jamovi',
            logo: 'https://www.jamovi.org/assets/header-logo.svg',
            url: 'https://www.jamovi.org/',
            shortDescription: '开源统计平台，简洁易用，兼容 R。',
            shortDescription_en: 'Open-source statistical platform, simple and easy to use, compatible with R.',
            fullDescription: 'Jamovi是一个现代化的开源统计平台，旨在让统计分析变得更加简单和直观。该软件结合了传统统计软件的易用性和R语言的强大功能。Jamovi提供清洁简洁的用户界面，支持点击式操作，同时允许用户查看和修改底层的R代码。软件支持广泛的统计分析方法，包括描述性统计、t检验、方差分析、回归分析等。Jamovi的特色功能包括实时结果更新、美观的数据可视化和模块化的分析架构。软件还支持第三方模块扩展，用户可以安装额外的分析功能。',
            fullDescription_en: 'Jamovi is a modern open-source statistical platform designed to make statistical analysis simpler and more intuitive. The software combines the ease of use of traditional statistical software with the powerful functionality of the R language. Jamovi provides a clean, simple user interface supporting point-and-click operations while allowing users to view and modify the underlying R code. The software supports a wide range of statistical analysis methods, including descriptive statistics, t-tests, ANOVA, regression analysis, and more. Jamovi\'s distinctive features include real-time result updates, beautiful data visualization, and modular analysis architecture. The software also supports third-party module extensions, allowing users to install additional analysis functions.',
            tags: ['简洁易用', 'R兼容', '现代界面', '模块化'],
            tags_en: ['Simple & Easy', 'R Compatible', 'Modern Interface', 'Modular'],
            targetAudience: [
                '统计学初学者 - 学习统计分析',
                '心理学研究者 - 日常数据分析',
                '教育工作者 - 教学工具',
                'R用户 - 图形界面需求'
            ],
            targetAudience_en: [
                'Statistics beginners - Learning statistical analysis',
                'Psychology researchers - Daily data analysis',
                'Educators - Teaching tools',
                'R users - Graphical interface needs'
            ],
            relatedResources: [
                {name: 'JASP', id: 'jasp'},
                {name: 'R Project', id: 'rproject'},
                {name: 'SPSS', id: 'spss'}
            ]
        },
        'gpower': {
            id: 'gpower',
            name: 'G*Power',
            logo: 'https://www.psychologie.hhu.de/fileadmin/redaktion/Fakultaeten/Mathematisch-Naturwissenschaftliche_Fakultaet/Psychologie/AAP/gpower/GPowerIcon.png',
            url: 'https://www.psychologie.hhu.de/arbeitsgruppen/allgemeine-psychologie-und-arbeitspsychologie/gpower',
            shortDescription: '样本量计算软件，心理学科研常用。',
            shortDescription_en: 'Sample size calculation software, commonly used in psychology research.',
            fullDescription: 'G*Power是一个免费的统计功效分析和样本量计算软件，在心理学和社会科学研究中广泛使用。该软件可以进行事前、事后和敏感性功效分析，帮助研究者确定适当的样本量或评估研究的统计功效。G*Power支持多种统计检验方法，包括t检验、方差分析、相关分析、回归分析等。软件提供直观的图形界面和详细的计算结果，使研究者能够轻松进行功效分析。G*Power在研究设计阶段特别有用，可以帮助研究者优化实验设计，确保研究具有足够的统计功效来检测预期效应。',
            fullDescription_en: 'G*Power is a free statistical power analysis and sample size calculation software, widely used in psychology and social science research. The software can perform a priori, post hoc, and sensitivity power analyses, helping researchers determine appropriate sample sizes or evaluate the statistical power of studies. G*Power supports various statistical test methods, including t-tests, ANOVA, correlation analysis, regression analysis, and more. The software provides an intuitive graphical interface and detailed calculation results, enabling researchers to easily perform power analyses. G*Power is particularly useful in the research design phase, helping researchers optimize experimental designs and ensure studies have sufficient statistical power to detect expected effects.',
            tags: ['样本量计算', '功效分析', '研究设计', '免费软件'],
            tags_en: ['Sample Size Calculation', 'Power Analysis', 'Research Design', 'Free Software'],
            targetAudience: [
                '心理学研究者 - 实验设计',
                '统计学学生 - 学习功效分析',
                '临床研究者 - 样本量规划',
                '社会科学研究者 - 研究设计优化'
            ],
            targetAudience_en: [
                'Psychology researchers - Experimental design',
                'Statistics students - Learning power analysis',
                'Clinical researchers - Sample size planning',
                'Social science researchers - Research design optimization'
            ],
            relatedResources: [
                {name: 'SPSS', id: 'spss'},
                {name: 'R Project', id: 'rproject'},
                {name: 'JASP', id: 'jasp'}
            ]
        },
        'psychtoolbox': {
            id: 'psychtoolbox',
            name: 'MATLAB (Psychtoolbox)',
            logo: 'https://www.mathworks.com/content/dam/mathworks/mathworks-dot-com/images/responsive/supporting/products/matlab/matlab-icon.svg',
            url: 'http://psychtoolbox.org/',
            shortDescription: 'MATLAB 插件，心理学与神经科学实验工具。',
            shortDescription_en: 'MATLAB plugin, experimental tool for psychology and neuroscience.',
            fullDescription: 'Psychtoolbox是MATLAB的一个强大插件，专门为心理学、神经科学和视觉研究设计。该工具箱提供精确的刺激呈现、时间控制和数据收集功能，特别适合需要高精度的实验研究。Psychtoolbox支持复杂的视觉和听觉刺激生成，包括动态图像、3D图形、音频处理等。工具箱提供毫秒级的时间精度，确保实验的可靠性和重复性。Psychtoolbox被全球众多顶级研究机构使用，是视觉科学、认知神经科学和实验心理学的标准工具。该工具箱还支持多种硬件设备，如眼动仪、脑电设备等。',
            fullDescription_en: 'Psychtoolbox is a powerful MATLAB plugin specifically designed for psychology, neuroscience, and vision research. The toolbox provides precise stimulus presentation, timing control, and data collection functions, particularly suitable for experimental research requiring high precision. Psychtoolbox supports complex visual and auditory stimulus generation, including dynamic images, 3D graphics, and audio processing. The toolbox provides millisecond-level timing precision, ensuring experimental reliability and reproducibility. Psychtoolbox is used by numerous top research institutions worldwide and is a standard tool for vision science, cognitive neuroscience, and experimental psychology. The toolbox also supports various hardware devices such as eye trackers and EEG equipment.',
            tags: ['MATLAB插件', '高精度', '神经科学', '视觉研究'],
            tags_en: ['MATLAB Plugin', 'High Precision', 'Neuroscience', 'Vision Research'],
            targetAudience: [
                '神经科学研究者 - 精密实验',
                '视觉科学研究者 - 视觉实验',
                'MATLAB用户 - 心理学实验',
                '认知科学研究者 - 行为测量'
            ],
            targetAudience_en: [
                'Neuroscience researchers - Precision experiments',
                'Vision science researchers - Visual experiments',
                'MATLAB users - Psychology experiments',
                'Cognitive science researchers - Behavioral measurement'
            ],
            relatedResources: [
                {name: 'PsychoPy', id: 'psychopy'},
                {name: 'Inquisit', id: 'inquisit'},
                {name: 'Expyriment', id: 'expyriment'}
            ]
        },
        'zotero': {
            id: 'zotero',
            name: 'Zotero',
            logo: 'https://www.zotero.org/static/images/theme/zotero-logo.svg',
            url: 'https://www.zotero.org/',
            shortDescription: '免费文献管理软件，科研必备。',
            shortDescription_en: 'Free reference management software, essential for research.',
            fullDescription: 'Zotero是一个免费开源的文献管理软件，是科研工作者的必备工具。该软件可以自动收集、整理和引用学术文献，支持从网页、数据库和PDF文件中提取文献信息。Zotero提供强大的文献组织功能，用户可以创建文件夹、添加标签和笔记来管理文献。软件支持多种引用格式，包括APA、MLA、Chicago等，可以自动生成参考文献列表。Zotero还提供云同步功能，用户可以在多个设备间同步文献库。软件支持团队协作，研究团队可以共享文献库和协作编辑。Zotero与Word、LibreOffice等文字处理软件集成，方便插入引用和生成参考文献。',
            fullDescription_en: 'Zotero is a free open-source reference management software, an essential tool for researchers. The software can automatically collect, organize, and cite academic literature, supporting extraction of bibliographic information from web pages, databases, and PDF files. Zotero provides powerful literature organization functions, allowing users to create folders, add tags and notes to manage literature. The software supports multiple citation formats, including APA, MLA, Chicago, and can automatically generate reference lists. Zotero also provides cloud synchronization, allowing users to sync their libraries across multiple devices. The software supports team collaboration, enabling research teams to share libraries and collaborate on editing. Zotero integrates with word processors like Word and LibreOffice, making it easy to insert citations and generate bibliographies.',
            tags: ['文献管理', '免费开源', '云同步', '团队协作'],
            tags_en: ['Reference Management', 'Free Open Source', 'Cloud Sync', 'Team Collaboration'],
            targetAudience: [
                '研究人员 - 文献管理需求',
                '学生 - 论文写作',
                '学者 - 学术写作',
                '研究团队 - 协作研究'
            ],
            targetAudience_en: [
                'Researchers - Literature management needs',
                'Students - Thesis writing',
                'Scholars - Academic writing',
                'Research teams - Collaborative research'
            ],
            relatedResources: [
                {name: 'R Project', id: 'rproject'},
                {name: 'SPSS', id: 'spss'},
                {name: 'JASP', id: 'jasp'}
            ]
        }
    };
    
    // 获取资源详情
    const resource = resourceDatabase[resourceId];
    
    // 如果资源不存在，返回首页
    if (!resource) {
        window.location.href = 'index.html';
        return;
    }
    
    // 渲染详情页面
    renderResourceDetail(resource);
    
    // 设置收藏功能
    setupFavoriteButton(resource.id);
});

// 资源翻译数据
const resourceTranslations = {
    'coursera': {
        shortDescription: {
            zh: '国际心理学课程平台，涵盖认知、发展、临床、社会心理学等多个方向。',
            en: 'International psychology course platform covering cognitive, developmental, clinical, social psychology and more.'
        },
        fullDescription: {
            zh: 'Coursera是全球领先的在线学习平台，提供来自世界顶尖大学和机构的心理学课程。平台上的心理学课程涵盖了认知心理学、发展心理学、临床心理学、社会心理学、积极心理学等多个领域。课程由耶鲁大学、密歇根大学、宾夕法尼亚大学等知名院校的教授讲授，内容包括视频讲座、阅读材料、互动测验和同行评审作业。学习者可以获得专业证书，提升职业技能和学术知识。Coursera的课程设计灵活，允许学习者按照自己的节奏学习，同时提供论坛讨论和导师支持，创造了一个全球性的学习社区。',
            en: 'Coursera is a leading global online learning platform offering psychology courses from top universities and institutions worldwide. The psychology courses cover multiple fields including cognitive psychology, developmental psychology, clinical psychology, social psychology, and positive psychology. Courses are taught by professors from renowned institutions such as Yale University, University of Michigan, and University of Pennsylvania, featuring video lectures, reading materials, interactive quizzes, and peer-reviewed assignments. Learners can earn professional certificates to enhance career skills and academic knowledge. Coursera\'s course design is flexible, allowing learners to study at their own pace while providing forum discussions and mentor support, creating a global learning community.'
        },
        tags: {
            zh: ['在线课程', '多领域', '专业证书', '国际平台'],
            en: ['Online Courses', 'Multiple Fields', 'Professional Certificates', 'International Platform']
        }
    },
    'edx': {
        shortDescription: {
            zh: '世界顶尖大学开放课程，含认知科学、教育心理学、社会心理学。',
            en: 'Open courses from world-class universities, including cognitive science, educational psychology, and social psychology.'
        },
        fullDescription: {
            zh: 'edX是由哈佛大学和麻省理工学院创立的非营利性在线学习平台，提供来自全球顶尖大学的高质量心理学课程。平台上的心理学课程涵盖了认知科学、教育心理学、社会心理学、临床心理学和神经科学等领域。这些课程由哈佛大学、伯克利大学、麻省理工学院等知名院校的教授讲授，采用视频讲座、互动练习和讨论论坛等多种教学方式。edX提供免费审核课程和付费认证课程两种选择，学习者可以根据自己的需求选择适合的学习方式。平台还提供MicroMasters和专业证书项目，帮助学习者获得专业认可和职业发展机会。',
            en: 'edX is a non-profit online learning platform founded by Harvard University and MIT, offering high-quality psychology courses from top global universities. The psychology courses cover cognitive science, educational psychology, social psychology, clinical psychology, and neuroscience. These courses are taught by professors from renowned institutions such as Harvard University, UC Berkeley, and MIT, using various teaching methods including video lectures, interactive exercises, and discussion forums. edX offers both free audit courses and paid verified courses, allowing learners to choose according to their needs. The platform also provides MicroMasters and Professional Certificate programs, helping learners gain professional recognition and career development opportunities.'
        },
        tags: {
            zh: ['在线课程', '名校课程', '认证项目', '多语言'],
            en: ['Online Courses', 'Prestigious University Courses', 'Certification Programs', 'Multilingual']
        }
    },
    'mit': {
        shortDescription: {
            zh: '麻省理工学院开放课程，提供认知科学、神经科学等领域的免费学习资源。',
            en: 'MIT OpenCourseWare provides free learning resources in cognitive science, neuroscience, and related fields.'
        },
        fullDescription: {
            zh: 'MIT OpenCourseWare是麻省理工学院的一项开创性计划，提供几乎所有MIT课程的免费在线教材。在心理学和认知科学领域，OCW提供了大量高质量的课程资源，包括认知科学、神经科学、发展心理学和实验心理学等。这些资源包括完整的课程大纲、讲义、阅读材料、作业问题和考试试题，有些课程还提供视频讲座。MIT OCW的独特之处在于它提供了真实的MIT课程材料，让全球学习者能够接触到世界顶级大学的教育内容。这些资源完全免费，没有注册要求，学习者可以按照自己的节奏学习，但不提供学分或证书。',
            en: 'MIT OpenCourseWare is a pioneering initiative by the Massachusetts Institute of Technology that provides free online access to materials from nearly all MIT courses. In the fields of psychology and cognitive science, OCW offers numerous high-quality course resources, including cognitive science, neuroscience, developmental psychology, and experimental psychology. These resources include complete course syllabi, lecture notes, reading materials, assignment problems, and exam questions, with some courses also offering video lectures. What makes MIT OCW unique is that it provides authentic MIT course materials, allowing learners worldwide to access educational content from a world-class university. These resources are completely free with no registration requirements, allowing learners to study at their own pace, although no credits or certificates are provided.'
        },
        tags: {
            zh: ['开放教育资源', '认知科学', '神经科学', '免费'],
            en: ['Open Educational Resources', 'Cognitive Science', 'Neuroscience', 'Free']
        }
    },
    'openstax': {
        shortDescription: {
            zh: '免费、开源心理学基础教材，涵盖心理学核心概念，适合入门。',
            en: 'Free, open-source psychology textbook covering core concepts, ideal for beginners.'
        },
        fullDescription: {
            zh: 'OpenStax Psychology 2e是一本全面的心理学入门教材，由OpenStax组织开发并免费提供。这本教材涵盖了心理学的所有核心领域，包括研究方法、生物心理学、感知、学习、记忆、认知、发展、社会和人格心理学、心理障碍及其治疗等。教材采用清晰的语言和结构，配有丰富的图表、案例研究和实际应用示例，使复杂的概念易于理解。作为开放教育资源，它可以免费下载为PDF、EPUB或在线阅读，也可以低成本购买印刷版。教材由专业心理学家和教育工作者编写，定期更新以反映最新的研究和教学实践。OpenStax Psychology 2e特别适合大学心理学导论课程，也是自学者的理想资源。',
            en: 'OpenStax Psychology 2e is a comprehensive introductory psychology textbook developed and provided for free by the OpenStax organization. This textbook covers all core areas of psychology, including research methods, biopsychology, sensation and perception, learning, memory, cognition, development, social and personality psychology, psychological disorders, and their treatments. The textbook uses clear language and structure, with rich illustrations, case studies, and practical application examples that make complex concepts easy to understand. As an open educational resource, it can be downloaded for free as PDF, EPUB, or read online, with low-cost print versions also available. The textbook is written by professional psychologists and educators and is regularly updated to reflect the latest research and teaching practices. OpenStax Psychology 2e is particularly suitable for college introductory psychology courses and is an ideal resource for self-learners.'
        },
        tags: {
            zh: ['免费教材', '开放教育资源', '心理学基础', '电子书'],
            en: ['Free Textbook', 'Open Educational Resource', 'Psychology Fundamentals', 'E-book']
        }
    },
    'noba': {
        shortDescription: {
            zh: '全球学者撰写的模块化教材，免费电子书（PDF/在线阅读）。',
            en: 'Modular textbooks written by global scholars, free e-books (PDF/online reading).'
        },
        fullDescription: {
            zh: 'Noba Project是一个创新的心理学教育平台，提供由全球顶尖心理学家撰写的高质量、模块化的心理学教材。该项目的独特之处在于其灵活的模块化设计，允许教育者和学习者根据自己的需求自定义教材内容。Noba提供超过100个独立的心理学主题模块，涵盖从基础理论到应用心理学的各个方面。所有内容均以开放获取方式提供，可以免费下载PDF版本或在线阅读。Noba教材的内容定期更新，反映最新的科学发现和教学方法。平台还提供教学资源、测验和多媒体材料，支持教育者有效地使用这些材料。Noba Project致力于减轻学生的教育成本负担，同时提高心理学教育的质量和可及性。',
            en: 'The Noba Project is an innovative psychology education platform offering high-quality, modular psychology textbooks written by top psychologists from around the world. What makes this project unique is its flexible modular design, allowing educators and learners to customize textbook content according to their needs. Noba provides over 100 independent psychology topic modules covering various aspects from basic theories to applied psychology. All content is provided with open access, available for free download in PDF format or online reading. Noba textbook content is regularly updated to reflect the latest scientific discoveries and teaching methods. The platform also offers teaching resources, quizzes, and multimedia materials to support educators in effectively using these materials. The Noba Project is committed to reducing the financial burden of education on students while improving the quality and accessibility of psychology education.'
        },
        tags: {
            zh: ['模块化教材', '开放获取', '自定义内容', '教学资源'],
            en: ['Modular Textbook', 'Open Access', 'Customizable Content', 'Teaching Resources']
        }
    },
    'saylor': {
        shortDescription: {
            zh: '免费心理学课程与教材下载，涵盖心理学导论。',
            en: 'Free psychology courses and textbook downloads covering introduction to psychology.'
        },
        fullDescription: {
            zh: 'Saylor Academy是一个非营利组织，提供免费的在线课程和教材，包括全面的心理学资源。其心理学课程包括心理学导论、发展心理学、社会心理学等，每门课程都配有免费的电子教材和学习资源。这些教材经过精心策划，内容全面且符合大学水平的学术标准。学习者可以按照自己的节奏学习，完成课程后还可以获得免费的结业证书。Saylor Academy的心理学教材采用开放教育资源，可以自由下载和使用，没有任何费用。这些资源特别适合自学者、预算有限的学生以及希望提供免费教育资源的教育工作者。Saylor的课程设计注重实用性和可访问性，使心理学知识对广泛的受众开放。',
            en: 'Saylor Academy is a non-profit organization offering free online courses and textbooks, including comprehensive psychology resources. Its psychology courses include introduction to psychology, developmental psychology, social psychology, and more, each equipped with free electronic textbooks and learning resources. These textbooks are carefully curated, comprehensive, and meet college-level academic standards. Learners can study at their own pace and receive free completion certificates after finishing courses. Saylor Academy\'s psychology textbooks use open educational resources that can be freely downloaded and used without any cost. These resources are particularly suitable for self-learners, budget-conscious students, and educators wishing to provide free educational resources. Saylor\'s course design emphasizes practicality and accessibility, making psychological knowledge available to a wide audience.'
        },
        tags: {
            zh: ['免费课程', '开放教育资源', '自定进度', '结业证书'],
            en: ['Free Courses', 'Open Educational Resources', 'Self-paced', 'Completion Certificates']
        }
    },
    'apa': {
        shortDescription: {
            zh: '美国心理学协会提供的免费电子书和开放获取资源。',
            en: 'Free e-books and open access resources provided by the American Psychological Association.'
        },
        fullDescription: {
            zh: 'APA（美国心理学协会）提供一系列免费电子书和开放获取资源，为心理学学生、研究人员和专业人士提供高质量的学术内容。这些资源涵盖了心理学的多个领域，包括临床心理学、研究方法、教育心理学、社会心理学等。APA的免费电子书由该领域的专家撰写，遵循严格的学术标准和同行评审过程。除了电子书外，APA还提供开放获取的期刊文章、研究报告和教育资源。这些材料可以通过APA的网站免费访问，部分资源需要简单注册。APA的开放资源特别有价值，因为它们代表了心理学领域的权威声音，提供了最新的研究发现和专业指导。',
            en: 'The American Psychological Association (APA) offers a range of free e-books and open access resources, providing high-quality academic content for psychology students, researchers, and professionals. These resources cover multiple areas of psychology, including clinical psychology, research methods, educational psychology, social psychology, and more. APA\'s free e-books are written by experts in the field and follow rigorous academic standards and peer-review processes. In addition to e-books, APA also provides open access journal articles, research reports, and educational resources. These materials can be accessed for free through APA\'s website, with some resources requiring simple registration. APA\'s open resources are particularly valuable as they represent authoritative voices in the field of psychology, offering the latest research findings and professional guidance.'
        },
        tags: {
            zh: ['专业资源', '开放获取', '学术标准', '研究资料'],
            en: ['Professional Resources', 'Open Access', 'Academic Standards', 'Research Materials']
        }
    },
    'bccampus': {
        shortDescription: {
            zh: '加拿大开放教育资源，提供多种心理学开放教材。',
            en: 'Canadian open educational resources offering various psychology open textbooks.'
        },
        fullDescription: {
            zh: 'BCcampus OpenEd是加拿大不列颠哥伦比亚省的一个开放教育资源项目，提供多种高质量的心理学开放教材。这个平台收集和开发了各种心理学教材，包括心理学导论、发展心理学、异常心理学等多个领域。所有教材均采用开放许可，可以免费下载、修改和分享。BCcampus的教材由专业教育者编写和审核，确保内容的准确性和教育价值。这些资源支持多种格式，包括PDF、EPUB和在线阅读，方便不同设备和学习偏好的用户。BCcampus还提供辅助资源，如教学指南、测验题库和幻灯片，帮助教育者有效地使用这些开放教材。该平台特别关注加拿大和北美的教育环境，但其资源对全球学习者同样有价值。',
            en: 'BCcampus OpenEd is an open educational resource project from British Columbia, Canada, offering various high-quality psychology open textbooks. This platform collects and develops a range of psychology textbooks, including introduction to psychology, developmental psychology, abnormal psychology, and many other fields. All textbooks use open licenses and can be freely downloaded, modified, and shared. BCcampus textbooks are written and reviewed by professional educators, ensuring content accuracy and educational value. These resources support multiple formats, including PDF, EPUB, and online reading, accommodating users with different devices and learning preferences. BCcampus also provides supplementary resources such as teaching guides, quiz banks, and slides to help educators effectively use these open textbooks. The platform particularly focuses on Canadian and North American educational environments, but its resources are equally valuable to global learners.'
        },
        tags: {
            zh: ['开放教育资源', '加拿大资源', '多种格式', '教学辅助材料'],
            en: ['Open Educational Resources', 'Canadian Resources', 'Multiple Formats', 'Teaching Support Materials']
        }
    },
    'yale': {
        shortDescription: {
            zh: '耶鲁大学开放课程，包含心理学导论等经典课程，由知名教授讲授。',
            en: 'Yale University Open Courses, including classic courses like Introduction to Psychology, taught by renowned professors.'
        },
        fullDescription: {
            zh: '耶鲁大学开放课程是耶鲁大学提供的免费在线教育资源，其中包含了多门高质量的心理学课程。最著名的是由保罗·布鲁姆教授讲授的《心理学导论》，这门课程全面介绍了心理学的主要领域和理论，包括感知、认知、发展、社会心理学、临床心理学等。耶鲁开放课程提供完整的视频讲座、课程大纲和补充阅读材料，让学习者能够深入了解心理学的基础知识和前沿研究。这些课程由耶鲁大学的顶尖教授讲授，保持了耶鲁教育的高标准和严谨性。所有资源完全免费，没有注册要求，但不提供学分或证书。',
            en: 'Yale University Open Courses are free online educational resources provided by Yale University, which include multiple high-quality psychology courses. The most famous is "Introduction to Psychology" taught by Professor Paul Bloom, which comprehensively introduces the main fields and theories of psychology, including perception, cognition, development, social psychology, clinical psychology, and more. Yale Open Courses provide complete video lectures, course syllabi, and supplementary reading materials, allowing learners to gain an in-depth understanding of the fundamentals and cutting-edge research in psychology. These courses are taught by Yale University\'s top professors, maintaining Yale\'s high standards and academic rigor. All resources are completely free with no registration requirements, although no credits or certificates are provided.'
        },
        tags: {
            zh: ['开放教育资源', '视频讲座', '心理学导论', '免费'],
            en: ['Open Educational Resources', 'Video Lectures', 'Introduction to Psychology', 'Free']
        }
    },
    'harvard': {
        shortDescription: {
            zh: '哈佛大学在线课程，提供认知心理学、积极心理学等专业课程。',
            en: 'Harvard University Online Courses, offering professional courses in cognitive psychology, positive psychology, and more.'
        },
        fullDescription: {
            zh: '哈佛大学在线学习平台提供了多种形式的心理学课程，包括免费的开放课程和付费的专业证书课程。哈佛的心理学课程涵盖了认知心理学、积极心理学、发展心理学、社会心理学等多个领域，由哈佛大学著名教授和研究人员讲授。特别值得一提的是哈佛的积极心理学课程，这是该领域的开创性课程之一，探讨了幸福、韧性和个人成长等主题。哈佛在线课程采用多种教学方法，包括视频讲座、案例研究、互动练习和同伴讨论。付费课程提供导师支持、作业评分和完成证书，而免费课程则允许学习者自主学习课程内容。',
            en: 'Harvard University\'s online learning platform offers various forms of psychology courses, including free open courses and paid professional certificate courses. Harvard\'s psychology courses cover cognitive psychology, positive psychology, developmental psychology, social psychology, and other fields, taught by renowned Harvard University professors and researchers. Particularly noteworthy is Harvard\'s positive psychology course, one of the pioneering courses in this field, exploring topics such as happiness, resilience, and personal growth. Harvard online courses employ various teaching methods, including video lectures, case studies, interactive exercises, and peer discussions. Paid courses provide mentor support, assignment grading, and completion certificates, while free courses allow learners to study course content independently.'
        },
        tags: {
            zh: ['名校课程', '积极心理学', '专业证书', '多种形式'],
            en: ['Prestigious University Courses', 'Positive Psychology', 'Professional Certificates', 'Various Formats']
        }
    },
    'berkeley': {
        shortDescription: {
            zh: '加州大学伯克利分校在线学习平台，提供心理学证书项目和专业课程。',
            en: 'UC Berkeley Online Learning platform, offering psychology certificate programs and professional courses.'
        },
        fullDescription: {
            zh: '加州大学伯克利分校的在线学习平台提供了全面的心理学课程和证书项目。伯克利的心理学课程以其严谨的科学方法和创新研究而闻名，涵盖了认知心理学、发展心理学、社会心理学、临床心理学和神经科学等领域。伯克利提供专业证书项目，如"临床心理学基础"和"发展心理学"，这些项目由伯克利的教授和行业专家设计和教授。课程采用多种教学方法，包括视频讲座、案例分析、研究项目和小组讨论。伯克利的在线课程特别强调将理论与实践相结合，帮助学习者将心理学知识应用到实际工作和生活中。完成证书项目的学生将获得伯克利大学的正式认证，这在学术和职业发展中具有很高的价值。',
            en: 'The University of California, Berkeley\'s online learning platform offers comprehensive psychology courses and certificate programs. Berkeley\'s psychology courses are renowned for their rigorous scientific methods and innovative research, covering fields such as cognitive psychology, developmental psychology, social psychology, clinical psychology, and neuroscience. Berkeley offers professional certificate programs, such as "Foundations of Clinical Psychology" and "Developmental Psychology," designed and taught by Berkeley professors and industry experts. Courses utilize various teaching methods, including video lectures, case analyses, research projects, and group discussions. Berkeley\'s online courses particularly emphasize combining theory with practice, helping learners apply psychological knowledge to their work and life. Students who complete certificate programs receive formal certification from UC Berkeley, which holds high value in academic and career development.'
        },
        tags: {
            zh: ['证书项目', '应用心理学', '研究方法', '专业发展'],
            en: ['Certificate Programs', 'Applied Psychology', 'Research Methods', 'Professional Development']
        }
    }
};

// 获取当前语言
let currentLang = 'zh';

// 根据ID获取资源信息的辅助函数
function getResourceById(id) {
    // 获取URL参数
    const urlParams = new URLSearchParams(window.location.search);
    const currentResourceId = urlParams.get('id');
    
    // 资源数据库（这里需要引用完整的资源数据库）
    const resourceDatabase = {
        'coursera': {
            id: 'coursera',
            name: 'Coursera - Psychology',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/1200px-Coursera-Logo_600x600.svg.png',
            shortDescription: '国际心理学课程平台，涵盖认知、发展、临床、社会心理学等多个方向。'
        },
        'edx': {
            id: 'edx',
            name: 'edX - Psychology',
            logo: 'logo/edX.png',
            shortDescription: '世界顶尖大学开放课程，含认知科学、教育心理学、社会心理学。'
        },
        'mit': {
            id: 'mit',
            name: 'MIT OpenCourseWare - Psychology',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/1280px-MIT_logo.svg.png',
            shortDescription: '麻省理工学院开放课程，提供认知科学、神经科学等领域的免费学习资源。'
        },
        'yale': {
            id: 'yale',
            name: 'Yale University Open Courses',
            logo: 'logo/yale.png',
            shortDescription: '耶鲁大学开放课程，包含心理学导论等经典课程，由知名教授讲授。'
        },
        'harvard': {
            id: 'harvard',
            name: 'Harvard University Online Courses',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/320px-Harvard_University_logo.svg.png',
            shortDescription: '哈佛大学在线课程，提供认知心理学、积极心理学等专业课程。'
        },
        'berkeley': {
            id: 'berkeley',
            name: 'UC Berkeley Online Learning',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Seal_of_University_of_California%2C_Berkeley.svg/1200px-Seal_of_University_of_California%2C_Berkeley.svg.png',
            shortDescription: '加州大学伯克利分校在线学习平台，提供心理学证书项目和专业课程。'
        },
        'openstax': {
            id: 'openstax',
            name: 'OpenStax Psychology 2e',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/OpenStax_logo.svg/1200px-OpenStax_logo.svg.png',
            shortDescription: '免费、开源心理学基础教材，涵盖心理学核心概念，适合入门。'
        },
        'noba': {
            id: 'noba',
            name: 'Noba Project - Free Psychology Textbook',
            logo: 'https://nobaproject.com/static/images/noba-logo.png',
            shortDescription: '全球学者撰写的模块化教材，免费电子书（PDF/在线阅读）。'
        },
        'saylor': {
            id: 'saylor',
            name: 'Saylor Academy - Psychology Textbooks',
            logo: 'https://www.saylor.org/wp-content/uploads/2019/02/saylor-logo-white-bg.png',
            shortDescription: '免费心理学课程与教材下载，涵盖心理学导论。'
        },
        'apa': {
            id: 'apa',
            name: 'APA Free E-Books',
            logo: 'logo/apa.png',
            shortDescription: '美国心理学协会提供的免费电子书和开放获取资源。'
        },
        'bccampus': {
            id: 'bccampus',
            name: 'BCcampus OpenEd',
            logo: 'https://bccampus.ca/wp-content/uploads/2020/09/BCcampus-logo-tagline-colour.png',
            shortDescription: '加拿大开放教育资源，提供多种心理学开放教材。'
        },
        
        // 2.3.1 认知心理学
        'cogsci': {
            id: 'cogsci',
            name: 'Cognitive Science Society',
            logo: 'https://cognitivesciencesociety.org/wp-content/uploads/2019/01/cogsci-logo.png',
            shortDescription: '国际认知科学协会，跨学科研究。'
        },
        'psychonomic': {
            id: 'psychonomic',
            name: 'Psychonomic Society',
            logo: 'https://www.psychonomic.org/images/psychonomic-logo.png',
            shortDescription: '认知与实验心理学顶级学会。'
        },
        'mitbcs': {
            id: 'mitbcs',
            name: 'MIT Department of Brain & Cognitive Sciences',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/1280px-MIT_logo.svg.png',
            shortDescription: 'MIT 认知与脑科学研究中心。'
        },
        
        // 2.3.2 发展心理学
        'srcd': {
            id: 'srcd',
            name: 'Society for Research in Child Development (SRCD)',
            logo: 'https://www.srcd.org/sites/default/files/SRCD_logo_2019.png',
            shortDescription: '儿童发展研究国际学会。'
        },
        'apadiv7': {
            id: 'apadiv7',
            name: 'APA Division 7: Developmental Psychology',
            logo: 'https://www.apa.org/images/apa-logo.svg',
            shortDescription: '发展心理学专业分部。'
        },
        'zerotothree': {
            id: 'zerotothree',
            name: 'Zero to Three',
            logo: 'https://www.zerotothree.org/wp-content/uploads/2019/04/ZTT-logo-horizontal.png',
            shortDescription: '婴幼儿发展研究与干预。'
        },
        
        // 2.3.3 临床与咨询心理学
        'apadiv12': {
            id: 'apadiv12',
            name: 'APA Division 12: Society of Clinical Psychology',
            logo: 'https://www.apa.org/images/apa-logo.svg',
            shortDescription: '临床心理学学会。'
        },
        'apadiv17': {
            id: 'apadiv17',
            name: 'APA Division 17: Society of Counseling Psychology',
            logo: 'https://www.apa.org/images/apa-logo.svg',
            shortDescription: '咨询心理学学会。'
        },
        'spr': {
            id: 'spr',
            name: 'Society for Psychotherapy Research (SPR)',
            logo: 'https://www.psychotherapyresearch.org/images/SPR_logo.png',
            shortDescription: '心理治疗研究学会。'
        },
        
        // 2.3.4 社会心理学
        'spsp': {
            id: 'spsp',
            name: 'Society for Personality and Social Psychology (SPSP)',
            logo: 'https://www.spsp.org/sites/default/files/SPSP_logo_horizontal.png',
            shortDescription: '全球最大的人格与社会心理学组织。'
        },
        'easp': {
            id: 'easp',
            name: 'European Association of Social Psychology (EASP)',
            logo: 'https://www.easp.eu/images/easp-logo.png',
            shortDescription: '欧洲社会心理学学会。'
        },
        'iarr': {
            id: 'iarr',
            name: 'International Association for Relationship Research (IARR)',
            logo: 'https://www.relationshipresearch.org/images/iarr-logo.png',
            shortDescription: '关系与社会互动研究学会。'
        },
        
        // 2.3.5 教育心理学
        'aera': {
            id: 'aera',
            name: 'American Educational Research Association (AERA)',
            logo: 'https://www.aera.net/portals/38/images/AERA_Logo_Horizontal.png',
            shortDescription: '教育与心理学研究核心组织。'
        },
        'apadiv15': {
            id: 'apadiv15',
            name: 'APA Division 15: Educational Psychology',
            logo: 'https://www.apa.org/images/apa-logo.svg',
            shortDescription: '教育心理学学会。'
        },
        'earli': {
            id: 'earli',
            name: 'European Association for Research on Learning and Instruction (EARLI)',
            logo: 'https://www.earli.org/sites/default/files/earli-logo.png',
            shortDescription: '欧洲教育心理学与学习科学协会。'
        },
        
        // 2.3.6 神经科学与脑科学
        'sfn': {
            id: 'sfn',
            name: 'Society for Neuroscience (SfN)',
            logo: 'https://www.sfn.org/-/media/SfN/Images/SfN-Logo.ashx',
            shortDescription: '全球最大神经科学学会。'
        },
        'cns': {
            id: 'cns',
            name: 'Cognitive Neuroscience Society (CNS)',
            logo: 'https://www.cogneurosociety.org/wp-content/uploads/2019/01/CNS-logo.png',
            shortDescription: '认知神经科学领域顶级组织。'
        },
        'hbp': {
            id: 'hbp',
            name: 'Human Brain Project (HBP)',
            logo: 'https://www.humanbrainproject.eu/images/hbp-logo.png',
            shortDescription: '欧盟脑科学研究旗舰项目。'
        }
    };
    
    return resourceDatabase[id] || null;
}

// 渲染资源详情
function renderResourceDetail(resource) {
    const detailContainer = document.getElementById('detail-content');
    
    // 构建HTML内容
    const detailHTML = `
        <div class="detail-header">
            <div class="detail-logo">
                <img src="${resource.logo}" alt="${resource.name} Logo">
            </div>
            <div class="detail-title">
                <h1 class="translatable" data-zh="${resource.name}" data-en="${resource.name}">${resource.name}</h1>
                <p class="translatable" data-zh="${resource.shortDescription}" data-en="${resource.shortDescription_en || resourceTranslations[resource.id]?.shortDescription?.en || resource.shortDescription}">${resource.shortDescription}</p>
                <div class="detail-tags">
                    ${resource.tags.map((tag, index) => {
                        const enTag = resource.tags_en?.[index] || resourceTranslations[resource.id]?.tags?.en?.[index] || tag;
                        return `<span class="translatable" data-zh="${tag}" data-en="${enTag}">${tag}</span>`;
                    }).join('')}
                </div>
                <div class="detail-actions">
                    <a href="${resource.url}" target="_blank" class="visit-site translatable" data-zh="访问网站" data-en="Visit Website">
                        <i class="fas fa-external-link-alt"></i> <span class="translatable" data-zh="访问网站" data-en="Visit Website">访问网站</span>
                    </a>
                    <a href="#" class="favorite-btn" id="favorite-btn">
                        <i class="far fa-star"></i> <span class="translatable" data-zh="收藏" data-en="Favorite">收藏</span>
                    </a>
                </div>
            </div>
        </div>
        
        <div class="detail-section">
            <h2 class="translatable" data-zh="详细介绍" data-en="Detailed Introduction">详细介绍</h2>
            <p class="translatable" data-zh="${resource.fullDescription}" data-en="${resource.fullDescription_en || resourceTranslations[resource.id]?.fullDescription?.en || resource.fullDescription}">${resource.fullDescription}</p>
        </div>
        
        <div class="detail-section target-audience">
            <h2 class="translatable" data-zh="适用人群" data-en="Target Audience">适用人群</h2>
            <ul>
                ${resource.targetAudience.map((audience, index) => {
                    const enAudience = resource.targetAudience_en?.[index] || audience;
                    return `<li class="translatable" data-zh="${audience}" data-en="${enAudience}">${audience}</li>`;
                }).join('')}
            </ul>
        </div>
        
        <div class="detail-section related-resources">
            <h2 class="translatable" data-zh="相关资源" data-en="Related Resources">相关资源</h2>
            <div class="related-resources-grid">
                ${resource.relatedResources.map(related => {
                    const relatedResource = getResourceById(related.id);
                    if (!relatedResource) return '';
                    
                    return `
                        <div class="related-resource-card">
                            <div class="related-resource-logo">
                                <img src="${relatedResource.logo}" alt="${relatedResource.name} Logo">
                            </div>
                            <h4 class="translatable" data-zh="${relatedResource.name}" data-en="${relatedResource.name}">${relatedResource.name}</h4>
                            <p class="translatable" data-zh="${relatedResource.shortDescription}" data-en="${relatedResource.shortDescription_en || resourceTranslations[relatedResource.id]?.shortDescription?.en || relatedResource.shortDescription}">${relatedResource.shortDescription}</p>
                            <a href="detail.html?id=${related.id}" class="translatable" data-zh="查看详情" data-en="View Details">查看详情</a>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
    
    // 更新页面内容
    detailContainer.innerHTML = detailHTML;
    
    // 更新页面标题
    document.title = `${resource.name} - yfpsynav`;
    
    // 初始化语言切换
    initTranslation();
}

// 初始化翻译功能
function initTranslation() {
    const translateBtn = document.getElementById('translate-toggle');
    if (!translateBtn) return;
    
    // 从localStorage获取语言设置，默认为英文
    currentLang = localStorage.getItem('language') || 'en';
    
    // 更新按钮文本 - 显示当前可切换到的语言
    translateBtn.innerHTML = currentLang === 'en' ? '<i class="fas fa-language"></i> 中文' : '<i class="fas fa-language"></i> English';
    
    // 应用翻译
    translatePage(currentLang);
    
    // 添加点击事件
    translateBtn.addEventListener('click', function() {
        currentLang = currentLang === 'en' ? 'zh' : 'en';
        localStorage.setItem('language', currentLang);
        
        // 更新按钮文本 - 显示当前可切换到的语言
        this.innerHTML = currentLang === 'en' ? '<i class="fas fa-language"></i> 中文' : '<i class="fas fa-language"></i> English';
        
        // 应用翻译
        translatePage(currentLang);
    });
}

// 翻译页面
function translatePage(lang) {
    // 翻译所有带有translatable类的元素
    document.querySelectorAll('.translatable').forEach(el => {
        if (el.dataset[lang]) {
            el.textContent = el.dataset[lang];
        }
    });
    
    // 翻译所有带有translatable-placeholder类的元素
    document.querySelectorAll('.translatable-placeholder').forEach(el => {
        if (el.dataset[lang]) {
            el.placeholder = el.dataset[lang];
        }
    });
}

// 设置收藏功能
function setupFavoriteButton(resourceId) {
    // 等待DOM加载完成
    setTimeout(() => {
        const favoriteBtn = document.getElementById('favorite-btn');
        if (!favoriteBtn) return;
        
        // 获取收藏列表
    let favorites = JSON.parse(localStorage.getItem('psychologyResourceFavorites') || '[]');

    // 检查是否已收藏
    const isFavorited = favorites.includes(resourceId);
        
        // 更新按钮状态
        updateFavoriteButtonState(favoriteBtn, isFavorited);
        
        // 添加点击事件
        favoriteBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 获取最新的收藏列表
        favorites = JSON.parse(localStorage.getItem('psychologyResourceFavorites') || '[]');
        
        // 切换收藏状态
        if (favorites.includes(resourceId)) {
            // 取消收藏
            favorites = favorites.filter(id => id !== resourceId);
            updateFavoriteButtonState(favoriteBtn, false);
        } else {
            // 添加收藏
            favorites.push(resourceId);
            updateFavoriteButtonState(favoriteBtn, true);
        }
        
        // 保存到localStorage
        localStorage.setItem('psychologyResourceFavorites', JSON.stringify(favorites));
        });
    }, 100);
}

// 更新收藏按钮状态
    function updateFavoriteButtonState(button, isFavorited) {
        const lang = localStorage.getItem('language') || 'zh';
        // 根据收藏状态更新按钮样式和文本
        if (isFavorited) {
            button.innerHTML = '<i class="fas fa-star"></i> ' + (lang === 'zh' ? '已收藏' : 'Favorited');
            button.classList.add('active');
        } else {
            button.innerHTML = '<i class="far fa-star"></i> ' + (lang === 'zh' ? '收藏' : 'Favorite');
            button.classList.remove('active');
        }
    }