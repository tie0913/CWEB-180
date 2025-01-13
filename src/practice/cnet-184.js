export const title = "CNET-184"
export const qList = [
    {
        "text": "You are setting up a secure website for your online store. You want to ensure that all data transmitted between your website and your customers is encrypted.\nWhich of the following steps is essential for you to achieve this?\n",
        "options": [
            {
                "text": "Install a web analytics tool.",
                "correct": "0"
            },
            {
                "text": "Obtain and install a digital certificate.",
                "correct": "1"
            },
            {
                "text": "Increase your website's bandwidth.",
                "correct": "0"
            },
            {
                "text": "Implement a CAPTCHA system on your website.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is established between a server and a client after successful authentication with TLS?\n",
        "options": [
            {
                "text": "A direct physical connection",
                "correct": "0"
            },
            {
                "text": "A public network",
                "correct": "0"
            },
            {
                "text": "A data compression protocol",
                "correct": "0"
            },
            {
                "text": "An encrypted tunnel",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What happens during a TLS handshake?\n",
        "options": [
            {
                "text": "The client and server negotiate network congestion management.",
                "correct": "0"
            },
            {
                "text": "The server and client agree on a data compression method.",
                "correct": "0"
            },
            {
                "text": "The server provides its digital certificate to the client for authentication.",
                "correct": "1"
            },
            {
                "text": "The server's processing load is reduced.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is it called when a system's clock begins to be off by a few seconds or even minutes?\n",
        "options": [
            {
                "text": "Dispersion",
                "correct": "0"
            },
            {
                "text": "Slew",
                "correct": "0"
            },
            {
                "text": "Slam",
                "correct": "0"
            },
            {
                "text": "Time drift",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What can happen if a server or host is configured with the incorrect time?\n",
        "options": [
            {
                "text": "It will automatically correct itself without NTP",
                "correct": "0"
            },
            {
                "text": "It can lead to increased network speed",
                "correct": "0"
            },
            {
                "text": "It will increase the security of network communications",
                "correct": "0"
            },
            {
                "text": "It may not be able to access network services",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "You are the network administrator for a small consulting firm. You've set up an NTP server to manage the time across all the machines in the network.\nYou have a computer that's experiencing a slight time drift of just a few seconds.\nWhich time correction should you use to fix the system's clock?\n",
        "options": [
            {
                "text": "Skew",
                "correct": "0"
            },
            {
                "text": "Slew",
                "correct": "1"
            },
            {
                "text": "Slam",
                "correct": "0"
            },
            {
                "text": "Jitter",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which of the following time standards does NTP use?\n",
        "options": [
            {
                "text": "UTC",
                "correct": "1"
            },
            {
                "text": "PDT",
                "correct": "0"
            },
            {
                "text": "CDT",
                "correct": "0"
            },
            {
                "text": "EDT",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What role does a grandmaster clock play in a PTP domain?\n",
        "options": [
            {
                "text": "It serves as the primary network router.",
                "correct": "0"
            },
            {
                "text": "It is the authoritative time source.",
                "correct": "1"
            },
            {
                "text": "It synchronizes directly with satellite clocks.",
                "correct": "0"
            },
            {
                "text": "It acts as the primary backup time source.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": ":PTP can be deployed as a layer 3 protocol over IP. What is a limitation of this deployment?\n",
        "options": [
            {
                "text": "It requires additional satellite synchronization.",
                "correct": "0"
            },
            {
                "text": "It cannot achieve the same accuracy as layer 2 implementations.",
                "correct": "1"
            },
            {
                "text": "It is incompatible with most network adapters.",
                "correct": "0"
            },
            {
                "text": "It increases the network bandwidth usage significantly.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the main advantage of Precision Time Protocol (PTP) over Network Time Protocol (NTP)?\n",
        "options": [
            {
                "text": "PTP supports more network services.",
                "correct": "0"
            },
            {
                "text": "PTP provides nanosecond precision.",
                "correct": "1"
            },
            {
                "text": "PTP uses less network bandwidth.",
                "correct": "0"
            },
            {
                "text": "PTP is easier to implement.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What does the term \"stateless protocol\" imply about HTTP?\n",
        "options": [
            {
                "text": "The server requires authentication for every request.",
                "correct": "0"
            },
            {
                "text": "Each request from a client to a server is treated as a new request.",
                "correct": "1"
            },
            {
                "text": "The server stores data in a centralized database for all requests.",
                "correct": "0"
            },
            {
                "text": "The server retains information about client requests indefinitely",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What feature does version 2 of HTTP add to enhance its functionality?\n",
        "options": [
            {
                "text": "Increased encryption",
                "correct": "0"
            },
            {
                "text": "More state-preserving features",
                "correct": "1"
            },
            {
                "text": "Improved FTP support",
                "correct": "0"
            },
            {
                "text": "Faster email transmission",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What does a client use to identify the resource it wants to request from an HTTP server?\n",
        "options": [
            {
                "text": "Uniform Resource Locator (URL)",
                "correct": "1"
            },
            {
                "text": "MAC address",
                "correct": "0"
            },
            {
                "text": "IP address",
                "correct": "0"
            },
            {
                "text": "Port number",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which TCP port does HTTPS encrypted traffic default to?\n",
        "options": [
            {
                "text": "8080",
                "correct": "0"
            },
            {
                "text": "80",
                "correct": "0"
            },
            {
                "text": "21",
                "correct": "0"
            },
            {
                "text": "443",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which of the following is a limitation of active FTP mode regarding firewalls?\n",
        "options": [
            {
                "text": "It requires HTTPS for data transfer.",
                "correct": "0"
            },
            {
                "text": "It can cause configuration problems due to unpredictable port usage.",
                "correct": "1"
            },
            {
                "text": "It encrypts the data transfer by default.",
                "correct": "0"
            },
            {
                "text": "It only works with TCP port 22.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the primary purpose of the File Transfer Protocol (FTP)?\n",
        "options": [
            {
                "text": "To stream video content",
                "correct": "0"
            },
            {
                "text": "To transfer files between a client and server",
                "correct": "1"
            },
            {
                "text": " send email messages",
                "correct": "0"
            },
            {
                "text": "To encrypt web traffic",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Why might TFTP not be suitable for transferring large files?\n",
        "options": [
            {
                "text": "It operates over UDP, which does not guarantee delivery.",
                "correct": "1"
            },
            {
                "text": "It requires manual confirmation for each packet.",
                "correct": "0"
            },
            {
                "text": "It only works within local networks.",
                "correct": "0"
            },
            {
                "text": "It encrypts the data, causing overhead.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Why is FTPES usually preferred over FTPS?\n",
        "options": [
            {
                "text": "FTPES uses stronger encryption than FTPS.",
                "correct": "0"
            },
            {
                "text": "FTPES is easier to configure with firewalls.",
                "correct": "1"
            },
            {
                "text": "FTPES supports larger file transfers.",
                "correct": "0"
            },
            {
                "text": "FTPES is faster than FTPS.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "In the context of FTP over Explicit TLS (FTPES), which command is used to encrypt the data connection\nfor actual file transfers after upgrading an unsecure connection to a secure one?\n",
        "options": [
            {
                "text": "PASV",
                "correct": "0"
            },
            {
                "text": "SSH",
                "correct": "0"
            },
            {
                "text": "PROT",
                "correct": "1"
            },
            {
                "text": "AUTH TLS",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which protocol is typically used for copy or backup operations on a NAS appliance?\n",
        "options": [
            {
                "text": "SMTP",
                "correct": "0"
            },
            {
                "text": "SMB or FTP",
                "correct": "1"
            },
            {
                "text": "SNMP",
                "correct": "0"
            },
            {
                "text": "HTTP",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Why is SMB1 now disabled by default on current Windows versions?\n",
        "options": [
            {
                "text": "It is too slow.",
                "correct": "0"
            },
            {
                "text": "It does not support printing services.",
                "correct": "0"
            },
            {
                "text": "It does not support encryption.",
                "correct": "0"
            },
            {
                "text": "It has very serious security vulnerabilities.",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which version of SMB supports message encryption?\n",
        "options": [
            {
                "text": "SMB2",
                "correct": "0"
            },
            {
                "text": "SMB1",
                "correct": "0"
            },
            {
                "text": "SMB3",
                "correct": "1"
            },
            {
                "text": "All versions",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which operating system is typically used by NAS appliances?\n",
        "options": [
            {
                "text": "MacOS",
                "correct": "0"
            },
            {
                "text": "iOS",
                "correct": "0"
            },
            {
                "text": "Windows",
                "correct": "0"
            },
            {
                "text": "Linux-based",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the primary function of a database?\n",
        "options": [
            {
                "text": "To serve as a graphical user interface for data management",
                "correct": "0"
            },
            {
                "text": "To provision information in a format that can be read and updated",
                "correct": "1"
            },
            {
                "text": "To store data in a static format that cannot be updated",
                "correct": "0"
            },
            {
                "text": "To encrypt data using transport layer security",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the purpose of using TLS transport encryption in databases?\n",
        "options": [
            {
                "text": "To secure data transmission over the network",
                "correct": "1"
            },
            {
                "text": "To synchronize data between servers",
                "correct": "0"
            },
            {
                "text": "To increase data storage capacity",
                "correct": "0"
            },
            {
                "text": "To improve the graphical user interface",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What does SMTP use to discover the IP address of the recipient's SMTP server?\n",
        "options": [
            {
                "text": "The sender's IP address",
                "correct": "0"
            },
            {
                "text": "The recipient's physical address",
                "correct": "0"
            },
            {
                "text": "The domain name part of the recipient's email address",
                "correct": "1"
            },
            {
                "text": "The recipient's email password",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the purpose of the STARTTLS command in SMTP?\n",
        "options": [
            {
                "text": "To create a new email account",
                "correct": "0"
            },
            {
                "text": "To encrypt the entire email message content",
                "correct": "0"
            },
            {
                "text": "To downgrade the connection to an unsecure state",
                "correct": "0"
            },
            {
                "text": "To upgrade an existing unsecure connection to use TLS",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is one of the primary purposes of the Internet Message Access Protocol (IMAP)?\n",
        "options": [
            {
                "text": "To encrypt email messages",
                "correct": "0"
            },
            {
                "text": "To deliver email to hosts that are permanently available",
                "correct": "0"
            },
            {
                "text": "To manage a mailbox on a server",
                "correct": "1"
            },
            {
                "text": "To connect to web servers",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "In a Windows environment, which protocol is typically used to access Microsoft Exchange mailboxes?\n",
        "options": [
            {
                "text": "HTTPS",
                "correct": "0"
            },
            {
                "text": "SMTP",
                "correct": "0"
            },
            {
                "text": "IMAP",
                "correct": "0"
            },
            {
                "text": "MAPI",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is a key advantage of using VoIP technology over traditional PSTN lines?\n",
        "options": [
            {
                "text": "Limited call routing options",
                "correct": "0"
            },
            {
                "text": "Higher call costs",
                "correct": "0"
            },
            {
                "text": "Ability to transmit voice over IP networks",
                "correct": "1"
            },
            {
                "text": "Requirement for separate voice and data channels",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is a significant difference between a TDM PBX and a VoIP PBX?\n",
        "options": [
            {
                "text": "A VoIP PBX requires a separate data channel for each call, while a TDM PBX does not.",
                "correct": "0"
            },
            {
                "text": "A TDM PBX can only support voice mail, while a VoIP PBX cannot.",
                "correct": "0"
            },
            {
                "text": "A TDM PBX uses the Internet for all calls, while a VoIP PBX uses the PSTN.",
                "correct": "0"
            },
            {
                "text": "A TDM PBX is supplied as vendor-specific hardware, while a VoIP PBX can be implemented as software.",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which of the following is a unique identifier used by SIP endpoints?\n",
        "options": [
            {
                "text": "MAC address",
                "correct": "0"
            },
            {
                "text": "DNS name",
                "correct": "0"
            },
            {
                "text": "SIP URI",
                "correct": "1"
            },
            {
                "text": "IP address",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the purpose of using a tel: URI scheme in SIP systems?\n",
        "options": [
            {
                "text": "To encrypt voice communications",
                "correct": "0"
            },
            {
                "text": "To assign unique identifiers to devices",
                "correct": "0"
            },
            {
                "text": "To compress audio data for transmission",
                "correct": "0"
            },
            {
                "text": "To dial a landline or cell phone",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "How do VoIP phones distinguish data traffic from voice traffic?\n",
        "options": [
            {
                "text": "By using separate physical links for each type of traffic",
                "correct": "0"
            },
            {
                "text": "By configuring separate VLAN IDs for data and voice traffic",
                "correct": "1"
            },
            {
                "text": "By using digital certificates for voice traffic only",
                "correct": "0"
            },
            {
                "text": "By prioritizing voice traffic over data traffic using PoE",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "How do VoIP phones use VLAN tagging?\n",
        "options": [
            {
                "text": "To ensure that SIP control and RTP media protocols are segregated from normal data traffic",
                "correct": "1"
            },
            {
                "text": "To ensure that voice and data traffic are combined on the same network",
                "correct": "0"
            },
            {
                "text": "To disable all data traffic except for VoIP communication",
                "correct": "0"
            },
            {
                "text": "To prioritize video traffic over voice traffic",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the purpose of a Business Impact Analysis (BIA) in continuity planning?\n",
        "options": [
            {
                "text": "To evaluate the effectiveness of sales strategies",
                "correct": "0"
            },
            {
                "text": "To identify risk disruption for primary business functions",
                "correct": "1"
            },
            {
                "text": "To assess the impact of new hires on the business",
                "correct": "0"
            },
            {
                "text": "To identify the most profitable business areas",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What does disaster recovery focus on?\n",
        "options": [
            {
                "text": "Increasing the number of employees",
                "correct": "0"
            },
            {
                "text": "Switching services to failover systems or sites",
                "correct": "1"
            },
            {
                "text": "Expanding the business to new markets",
                "correct": "0"
            },
            {
                "text": "Developing new products",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the significance of conducting validation tests in disaster recovery?\n",
        "options": [
            {
                "text": "To assess the effectiveness of marketing strategies",
                "correct": "0"
            },
            {
                "text": "To evaluate the company's financial health",
                "correct": "0"
            },
            {
                "text": "To ensure services can be restored",
                "correct": "1"
            },
            {
                "text": "To increase the company's market share",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What does an availability of \"five-nines\" (99.999%) signify in disaster recovery?\n",
        "options": [
            {
                "text": "The system requires maintenance 99.999% of the time.",
                "correct": "0"
            },
            {
                "text": "The system is unavailable for 99.999% of the time.",
                "correct": "0"
            },
            {
                "text": "The system can recover from any disaster in 99.999% of cases.",
                "correct": "0"
            },
            {
                "text": "The system is available for 99.999% of the time.",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What does Recovery Time Objective (RTO) measure in disaster recovery planning?\n",
        "options": [
            {
                "text": "The time it takes to detect a system failure",
                "correct": "0"
            },
            {
                "text": "The amount of time needed to perform system maintenance",
                "correct": "0"
            },
            {
                "text": "The maximum amount of data loss that is acceptable",
                "correct": "0"
            },
            {
                "text": "The time following a disaster within which a system must be restored",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the main difference between a hot site and a warm site?\n",
        "options": [
            {
                "text": "A hot site requires the latest data set to be loaded.",
                "correct": "0"
            },
            {
                "text": "A warm site is ready to deploy immediately.",
                "correct": "0"
            },
            {
                "text": "A warm site requires the latest data set to be loaded.",
                "correct": "1"
            },
            {
                "text": "A hot site is an empty building.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the primary challenge of entering into reciprocal arrangements for disaster recovery?\n",
        "options": [
            {
                "text": "It is complex to plan and set up.",
                "correct": "1"
            },
            {
                "text": "It does not provide mutual support.",
                "correct": "0"
            },
            {
                "text": "It is too expensive.",
                "correct": "0"
            },
            {
                "text": "It is simple to plan and set up.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which of the following is NOT a component of a fully redundant server configuration?\n",
        "options": [
            {
                "text": "Single network card",
                "correct": "1"
            },
            {
                "text": "Redundant storage",
                "correct": "0"
            },
            {
                "text": "Multiple cooling fans",
                "correct": "0"
            },
            {
                "text": "Multiple power supplies",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What does MTTF stand for, and how is it different from MTBF?\n",
        "options": [
            {
                "text": "Maximum Time to Fix; MTTF is used for repairable components, while MTBF is for non-repairable ones.",
                "correct": "0"
            },
            {
                "text": "Mean Time to Failure; MTTF is used for non-repairable components, while MTBF is for repairable ones.",
                "correct": "1"
            },
            {
                "text": "Maximum Time to Failure; MTTF is used for predicting the longest operational time, while MTBF is an average.",
                "correct": "0"
            },
            {
                "text": "Mean Time to Fix; MTTF and MTBF are interchangeable terms.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What distinguishes a Layer 7 switch from a Layer 4 switch in load balancing?\n",
        "options": [
            {
                "text": "Layer 7 switch increases the storage capacity of servers.",
                "correct": "0"
            },
            {
                "text": "Layer 7 switch makes forwarding decisions based on application-level data.",
                "correct": "1"
            },
            {
                "text": "Layer 7 switch is used exclusively for encrypting data traffic.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Where is a load balancer typically placed in a network topology?\n",
        "options": [
            {
                "text": "Within the client network",
                "correct": "0"
            },
            {
                "text": "Between the Internet and the application servers",
                "correct": "1"
            },
            {
                "text": "Directly on the application servers",
                "correct": "0"
            },
            {
                "text": "Between the client network and the Internet",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "In an active-active cluster configuration, what happens in the event of a failover?\n",
        "options": [
            {
                "text": "The system automatically purchases and adds a new node to the cluster.",
                "correct": "0"
            },
            {
                "text": "The workload of the failed node is not shifted, and the system goes offline.",
                "correct": "0"
            },
            {
                "text": "The remaining nodes are shut down to prevent data corruption.",
                "correct": "0"
            },
            {
                "text": "The workload of the failed node is shifted onto the remaining node(s).",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is a virtual IP in the context of high availability clusters?\n",
        "options": [
            {
                "text": "A shared or floating address used to access the service provided by the cluster.",
                "correct": "1"
            },
            {
                "text": "An IP address used exclusively for load balancing.",
                "correct": "0"
            },
            {
                "text": "A unique IP address assigned to each node in the cluster.",
                "correct": "0"
            },
            {
                "text": "The private IP address used for the management of cluster nodes.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which FHRP is designed to work in an active/standby configuration?\n",
        "options": [
            {
                "text": "OSPF",
                "correct": "0"
            },
            {
                "text": "GLBP",
                "correct": "0"
            },
            {
                "text": "EIGRP",
                "correct": "0"
            },
            {
                "text": "HSRP",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "In HSRP, what term is used to describe the group of routers configured to work together as a single default gateway?\n",
        "options": [
            {
                "text": "Backup group",
                "correct": "0"
            },
            {
                "text": "Active group",
                "correct": "0"
            },
            {
                "text": "Virtual group",
                "correct": "0"
            },
            {
                "text": "Standby group",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is referred to as configuration drift?\n",
        "options": [
            {
                "text": "The deviation of a CI from its baseline",
                "correct": "1"
            },
            {
                "text": "The process of updating a CI's baseline",
                "correct": "0"
            },
            {
                "text": "The act of backing up a CI's configuration",
                "correct": "0"
            },
            {
                "text": "The initial setup of a CI's configuration",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which of the following is the BEST approach when a configuration has drifted from its baseline?\n",
        "options": [
            {
                "text": "Perform testing to determine whether to revert.",
                "correct": "1"
            },
            {
                "text": "Ignore the drift as it is usually insignificant.",
                "correct": "0"
            },
            {
                "text": "Update the baseline template without testing.",
                "correct": "0"
            },
            {
                "text": "Always revert to the golden configuration.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which backup mode creates a snapshot-type image of the whole system?\n",
        "options": [
            {
                "text": "State/bare metal",
                "correct": "1"
            },
            {
                "text": "Incremental backup",
                "correct": "0"
            },
            {
                "text": "Configuration file",
                "correct": "0"
            },
            {
                "text": "Differential backup",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What role does a Change Advisory Board (CAB) play in change management?\n",
        "options": [
            {
                "text": "It approves major or significant changes.",
                "correct": "1"
            },
            {
                "text": "It implements the changes directly.",
                "correct": "0"
            },
            {
                "text": "It documents the need for change.",
                "correct": "0"
            },
            {
                "text": "It creates the Request for Change (RFC) documents.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Why should configuration changes only be made with a service request ticket?\n",
        "options": [
            {
                "text": "To bypass the approval process",
                "correct": "0"
            },
            {
                "text": "To eliminate the need for documentation",
                "correct": "0"
            },
            {
                "text": "To increase the speed of changes",
                "correct": "0"
            },
            {
                "text": "To ensure that the activity of network personnel is recorded",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "Why is it important to track software license usage in an asset inventory?\n",
        "options": [
            {
                "text": "To ensure compliance with the vendor's licensing agreement",
                "correct": "1"
            },
            {
                "text": "To track the company's profit margins",
                "correct": "0"
            },
            {
                "text": "To evaluate the company's branding strategies",
                "correct": "0"
            },
            {
                "text": "To monitor employee internet usage",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is a configuration backup used for when applying an update?\n",
        "options": [
            {
                "text": "To comply with software licensing agreements",
                "correct": "0"
            },
            {
                "text": "To enhance the performance of the update",
                "correct": "0"
            },
            {
                "text": "To reduce the time required for the update",
                "correct": "0"
            },
            {
                "text": "To serve as a fallback",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "Why is it important to stay up to date with system security advisories?\n",
        "options": [
            {
                "text": "To monitor the stock market for technology companies",
                "correct": "0"
            },
            {
                "text": "To ensure compliance with IT audit standards",
                "correct": "0"
            },
            {
                "text": "To stay informed about vulnerabilities",
                "correct": "1"
            },
            {
                "text": "To keep track of new IT products",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the standard method of sanitizing an HDD?\n",
        "options": [
            {
                "text": "Shredding",
                "correct": "0"
            },
            {
                "text": "Overwriting",
                "correct": "1"
            },
            {
                "text": "Incineration",
                "correct": "0"
            },
            {
                "text": "Degaussing",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What does the Secure Erase (SE) command do on HDDs?\n",
        "options": [
            {
                "text": "Marks all blocks as empty",
                "correct": "0"
            },
            {
                "text": "Encrypts all data on the drive",
                "correct": "0"
            },
            {
                "text": "Physically destroys the drive",
                "correct": "0"
            },
            {
                "text": "Performs a single pass of zero-filling",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the primary purpose of using physical network diagrams?\n",
        "options": [
            {
                "text": "To track software installations on network devices",
                "correct": "0"
            },
            {
                "text": "To track software installations on network devices",
                "correct": "0"
            },
            {
                "text": "To capture the complex relationships between network elements",
                "correct": "1"
            },
            {
                "text": "To document the physical location of employees",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the purpose of a rack diagram?\n",
        "options": [
            {
                "text": "To record the position of each appliance in the rack",
                "correct": "1"
            },
            {
                "text": "To document the physical location of employees within an office",
                "correct": "0"
            },
            {
                "text": "To track software versions installed on network devices",
                "correct": "0"
            },
            {
                "text": "To map out the logical flow of data within the network",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which layer's diagram would show asset IDs, cable links, and wall/patch panel/switch port IDs?\n",
        "options": [
            {
                "text": "Application",
                "correct": "0"
            },
            {
                "text": "Logical (IP/Layer 3)",
                "correct": "0"
            },
            {
                "text": "PHY (Physical layer)",
                "correct": "1"
            },
            {
                "text": "Data Link (Layer 2)",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What historical method might IT departments have used for tracking IP usage?\n",
        "options": [
            {
                "text": "Static files",
                "correct": "1"
            },
            {
                "text": "Cloud-based databases",
                "correct": "0"
            },
            {
                "text": "Oral tradition",
                "correct": "0"
            },
            {
                "text": "Physical logbooks",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which agreement is most likely to be used between two companies to protect shared sensitive information?\n",
        "options": [
            {
                "text": "Service Level Agreement (SLA)",
                "correct": "0"
            },
            {
                "text": "Employment Contract",
                "correct": "0"
            },
            {
                "text": "Non-Disclosure Agreement (NDA)",
                "correct": "1"
            },
            {
                "text": "Memorandum of Understanding (MOU)",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is a basic type of IP scanning mentioned in the document?\n",
        "options": [
            {
                "text": "Email filtering",
                "correct": "0"
            },
            {
                "text": "Color correction",
                "correct": "0"
            },
            {
                "text": "Host discovery",
                "correct": "1"
            },
            {
                "text": "Spreadsheet analysis",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What does an IP scanner do?\n",
        "options": [
            {
                "text": "Establishes the logical topology of the network",
                "correct": "1"
            },
            {
                "text": "Edits images",
                "correct": "0"
            },
            {
                "text": "Encrypts network traffic",
                "correct": "0"
            },
            {
                "text": "Creates spreadsheets",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which type of scanners use specially crafted probes to locate hosts that might be configured not to respond to pings?\n",
        "options": [
            {
                "text": "Security-oriented scanners",
                "correct": "1"
            },
            {
                "text": "Graphic design software",
                "correct": "0"
            },
            {
                "text": "Spreadsheet analysis tools",
                "correct": "0"
            },
            {
                "text": "Email management systems",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What does Nmap use to determine whether a host is present when used without switches?\n",
        "options": [
            {
                "text": "It performs a full database scan.",
                "correct": "0"
            },
            {
                "text": "It listens for any active Bluetooth devices.",
                "correct": "0"
            },
            {
                "text": "It sends an email to the network administrator.",
                "correct": "0"
            },
            {
                "text": "It pings and sends a TCP ACK packet to ports 80 and 443.",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which feature allows Nmap to work out hop counts?\n",
        "options": [
            {
                "text": "--script switch",
                "correct": "0"
            },
            {
                "text": "-sn switch",
                "correct": "0"
            },
            {
                "text": "-p switch",
                "correct": "0"
            },
            {
                "text": "--traceroute switch",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which Nmap scan type is less stealthy due to its use of the operating system to attempt a full TCP connection?\n",
        "options": [
            {
                "text": "UDP scans (-sU)",
                "correct": "0"
            },
            {
                "text": "TCP SYN (-sS)",
                "correct": "0"
            },
            {
                "text": "TCP connect (-sT)",
                "correct": "1"
            },
            {
                "text": "Port range (-p)",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the purpose of using the -sV or -A switch with Nmap?\n",
        "options": [
            {
                "text": "To limit the scan to the local network only",
                "correct": "0"
            },
            {
                "text": "To disable logging of the scan results",
                "correct": "0"
            },
            {
                "text": "To probe for software versions on each port",
                "correct": "1"
            },
            {
                "text": "To increase the speed of the scan",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the primary function of Cisco Discovery Protocol (CDP)?\n",
        "options": [
            {
                "text": "To provide a secure tunnel for data transmission",
                "correct": "0"
            },
            {
                "text": "To encrypt data traffic between Cisco devices",
                "correct": "0"
            },
            {
                "text": "To assign IP addresses to devices on a network",
                "correct": "0"
            },
            {
                "text": "To discover information about directly connected Cisco devices",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which of the following is NOT information that CDP can report?\n",
        "options": [
            {
                "text": "MAC address table sizes",
                "correct": "1"
            },
            {
                "text": "Power over Ethernet usage",
                "correct": "0"
            },
            {
                "text": "IOS version",
                "correct": "0"
            },
            {
                "text": "Device ID/hostname",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What can cause a broadcast storm in a network?\n",
        "options": [
            {
                "text": "Insufficient storage space on network devices",
                "correct": "0"
            },
            {
                "text": "Low CPU utilization",
                "correct": "0"
            },
            {
                "text": "High bandwidth availability",
                "correct": "0"
            },
            {
                "text": "Switching loops",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What metric measures the actual amount of data transferred over a network?\n",
        "options": [
            {
                "text": "Bandwidth",
                "correct": "0"
            },
            {
                "text": "Throughput",
                "correct": "1"
            },
            {
                "text": "CPU utilization",
                "correct": "0"
            },
            {
                "text": "Memory usage",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What does an availability monitor check for in an HTTP service to confirm availability?\n",
        "options": [
            {
                "text": "A 200 status code",
                "correct": "1"
            },
            {
                "text": "A 500 status code",
                "correct": "0"
            },
            {
                "text": "A 302 status code",
                "correct": "0"
            },
            {
                "text": "A 404 status code",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the primary function of an availability monitor?\n",
        "options": [
            {
                "text": "To update digital certificates",
                "correct": "0"
            },
            {
                "text": "To trigger an alarm for service unscheduled downtime",
                "correct": "1"
            },
            {
                "text": "To increase the speed of a service",
                "correct": "0"
            },
            {
                "text": "To manage network bandwidth",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What should you consider doing if a server hosting a service is overloaded?\n",
        "options": [
            {
                "text": "Throttle client connections.",
                "correct": "1"
            },
            {
                "text": "Disable the Spanning Tree Protocol (STP).",
                "correct": "0"
            },
            {
                "text": "Increase network congestion.",
                "correct": "0"
            },
            {
                "text": "Decrease the server's memory.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What does a configuration monitor do when there is a change to a device's production configuration?\n",
        "options": [
            {
                "text": "It generates logs, alerts, or alarms.",
                "correct": "1"
            },
            {
                "text": "It updates the baseline configuration.",
                "correct": "0"
            },
            {
                "text": "It automatically reverts the change.",
                "correct": "0"
            },
            {
                "text": "It disconnects the device from the network.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What mode in SNMPv3 does not encrypt packets but requires authentication?\n",
        "options": [
            {
                "text": "authPriv",
                "correct": "0"
            },
            {
                "text": "privAuth",
                "correct": "0"
            },
            {
                "text": "noAuthNoPriv",
                "correct": "0"
            },
            {
                "text": "authNoPriv",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the purpose of a community string in SNMP?\n",
        "options": [
            {
                "text": "To encrypt data packets",
                "correct": "0"
            },
            {
                "text": "To identify the network topology",
                "correct": "0"
            },
            {
                "text": "To increase network speed",
                "correct": "0"
            },
            {
                "text": "To serve as a type of password",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "An organization is using the Simple Network Management Protocol (SNMP)\nfor remote management and monitoring of servers and network appliances and must deploy an agent to each device.\nWhere are the statistics relating to the activity of each device kept?\n",
        "options": [
            {
                "text": "Trap",
                "correct": "0"
            },
            {
                "text": "Get",
                "correct": "0"
            },
            {
                "text": "MIB",
                "correct": "1"
            },
            {
                "text": "OID",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which version of SNMP supports encryption and strong user-based authentication?\n",
        "options": [
            {
                "text": "SNMP v2c",
                "correct": "0"
            },
            {
                "text": "SNMP v4",
                "correct": "0"
            },
            {
                "text": "SNMP v1",
                "correct": "0"
            },
            {
                "text": "SNMP v3",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is a major security weakness of SNMP v2c?\n",
        "options": [
            {
                "text": "It restricts management operations to known hosts.",
                "correct": "0"
            },
            {
                "text": "It sends community strings in plaintext.",
                "correct": "1"
            },
            {
                "text": "It uses strong encryption by default.",
                "correct": "0"
            },
            {
                "text": "It supports too many users.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What distinguishes an application log from a system log?\n",
        "options": [
            {
                "text": "An application log records data for a single specific service.",
                "correct": "1"
            },
            {
                "text": "An application log cannot record errors.",
                "correct": "0"
            },
            {
                "text": "An application log is only used for security purposes.",
                "correct": "0"
            },
            {
                "text": "An application log records data for the entire operating system.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What type of events does an audit log generally record?\n",
        "options": [
            {
                "text": "System configuration backups",
                "correct": "0"
            },
            {
                "text": "Detailed descriptions of all user activities",
                "correct": "0"
            },
            {
                "text": "Success/fail type events related to authentication",
                "correct": "1"
            },
            {
                "text": "Performance metrics for compute resources",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is a key feature of performance/traffic logs?\n",
        "options": [
            {
                "text": "They exclusively track user login attempts.",
                "correct": "0"
            },
            {
                "text": "They record only security breaches.",
                "correct": "0"
            },
            {
                "text": "They record metrics for network resources.",
                "correct": "1"
            },
            {
                "text": "They serve as backups for application data.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What does a syslog message comprise?\n",
        "options": [
            {
                "text": "Only a header containing a timestamp",
                "correct": "0"
            },
            {
                "text": "Only a message part with content",
                "correct": "0"
            },
            {
                "text": "A severity level and a message part",
                "correct": "0"
            },
            {
                "text": "A PRI code, a header, and a message part",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the purpose of the PRI code in a syslog message?\n",
        "options": [
            {
                "text": "To specify the protocol used",
                "correct": "0"
            },
            {
                "text": "To indicate the message's priority",
                "correct": "1"
            },
            {
                "text": "To identify the recipient of the message",
                "correct": "0"
            },
            {
                "text": "To encrypt the message",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is an automated event management system configured to generate?\n",
        "options": [
            {
                "text": "A backup of the logging system",
                "correct": "0"
            },
            {
                "text": "Some sort of alert",
                "correct": "1"
            },
            {
                "text": "A list of all devices on the network",
                "correct": "0"
            },
            {
                "text": "Detailed reports for every event",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "How can a high priority alert be communicated in an event management system?\n",
        "options": [
            {
                "text": "By increasing the logging level on all hosts",
                "correct": "0"
            },
            {
                "text": "By displaying it on the system dashboard only",
                "correct": "0"
            },
            {
                "text": "By sending an email to the system administrator",
                "correct": "1"
            },
            {
                "text": "By generating a detailed report at the end of the month",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "How do SIEM tools handle differences in date/time zones among various log sources?\n",
        "options": [
            {
                "text": "By only accepting logs in the UTC time zone",
                "correct": "0"
            },
            {
                "text": "By ignoring date/time information to avoid confusion",
                "correct": "0"
            },
            {
                "text": "By storing logs in separate databases based on their time zones",
                "correct": "0"
            },
            {
                "text": "By normalizing date/time zone differences to a single timeline",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What does log aggregation in the context of SIEM refer to?\n",
        "options": [
            {
                "text": "The process of deleting outdated log files to free up storage space",
                "correct": "0"
            },
            {
                "text": "The physical collection of log files from different devices",
                "correct": "0"
            },
            {
                "text": "Encrypting log files for secure storage",
                "correct": "0"
            },
            {
                "text": "Normalizing data from different sources to make it consistent",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "Why is plotting data as a graph helpful in log analysis?\n",
        "options": [
            {
                "text": "It eliminates the need for software analysis.",
                "correct": "0"
            },
            {
                "text": "It reduces the amount of data that needs to be stored.",
                "correct": "0"
            },
            {
                "text": "It increases the speed of the network.",
                "correct": "0"
            },
            {
                "text": "It makes it easier to spot trends or spikes in the data.",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "Why might an aggregation TAP drop frames under heavy load?\n",
        "options": [
            {
                "text": "Because it rebuilds streams into a single channel",
                "correct": "1"
            },
            {
                "text": "Because it requires a direct internet connection",
                "correct": "0"
            },
            {
                "text": "Because it cannot handle encrypted traffic",
                "correct": "0"
            },
            {
                "text": "Because it does not support gigabit signaling",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What distinguishes a Passive TAP from a SPAN/port mirroring connection?\n",
        "options": [
            {
                "text": "It can increase network speed.",
                "correct": "0"
            },
            {
                "text": "It physically copies the signal from the cabling to a monitor port.",
                "correct": "1"
            },
            {
                "text": "It requires special software to function.",
                "correct": "0"
            },
            {
                "text": "It can only monitor encrypted traffic.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the role of a packet sniffer in the context of a protocol analyzer?\n",
        "options": [
            {
                "text": "To increase the bandwidth of the network",
                "correct": "0"
            },
            {
                "text": "To capture frames moving over the network medium",
                "correct": "1"
            },
            {
                "text": "To physically connect different network segments",
                "correct": "0"
            },
            {
                "text": "To provide encryption for data packets",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the purpose of installing a special driver for a software-based sniffer?\n",
        "options": [
            {
                "text": "To increase the sniffer's processing speed",
                "correct": "0"
            },
            {
                "text": "To decrease the network's latency",
                "correct": "0"
            },
            {
                "text": "To encrypt the captured frames",
                "correct": "0"
            },
            {
                "text": "To allow the frames to be read from the network stack",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which option is used with tcpdump to specify the network interface to listen on?\n",
        "options": [
            {
                "text": "-v",
                "correct": "0"
            },
            {
                "text": "-w",
                "correct": "0"
            },
            {
                "text": "-e",
                "correct": "0"
            },
            {
                "text": "-i",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "How can the detail of the information shown about each frame be increased in tcpdump?\n",
        "options": [
            {
                "text": "Using the -e switch",
                "correct": "0"
            },
            {
                "text": "Using the -v, -vv, or -vvv switches",
                "correct": "1"
            },
            {
                "text": "Using the -w switch",
                "correct": "0"
            },
            {
                "text": "Using the -i switch",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What does the -w switch do in tcpdump?\n",
        "options": [
            {
                "text": "Writes output to a file",
                "correct": "1"
            },
            {
                "text": "Increases the amount of detail shown",
                "correct": "0"
            },
            {
                "text": "Reads the contents of a capture file",
                "correct": "0"
            },
            {
                "text": "Shows the Ethernet header",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the purpose of using display filters in Wireshark?\n",
        "options": [
            {
                "text": "To show only particular frames or sequences of frames",
                "correct": "1"
            },
            {
                "text": "To increase the capture speed of packets",
                "correct": "0"
            },
            {
                "text": "To change the color of the interface",
                "correct": "0"
            },
            {
                "text": "To delete unwanted packets from the network",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "In Wireshark, where can you access tools for traffic analysis?\n",
        "options": [
            {
                "text": "Statistics menu",
                "correct": "1"
            },
            {
                "text": "Edit menu",
                "correct": "0"
            },
            {
                "text": "File menu",
                "correct": "0"
            },
            {
                "text": "Tools menu",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which open-source tool is mentioned as a graphical packet capture and analysis utility?\n",
        "options": [
            {
                "text": "Nessus",
                "correct": "0"
            },
            {
                "text": "Wireshark",
                "correct": "1"
            },
            {
                "text": "Nmap",
                "correct": "0"
            },
            {
                "text": "Netcat",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What type of data transfer is described as bursty?\n",
        "options": [
            {
                "text": "File transfer",
                "correct": "1"
            },
            {
                "text": "Live audio broadcasting",
                "correct": "0"
            },
            {
                "text": "Voice over IP (VoIP)",
                "correct": "0"
            },
            {
                "text": "Real-time video streaming",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What are latency and jitter in the context of network performance?\n",
        "options": [
            {
                "text": "Techniques for optimizing bandwidth usage",
                "correct": "0"
            },
            {
                "text": "Measures of network speed and efficiency",
                "correct": "0"
            },
            {
                "text": "Types of network security protocols",
                "correct": "0"
            },
            {
                "text": "Problems of timing and sequence of packet delivery",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is packet loss?\n",
        "options": [
            {
                "text": "The duplication of data packets to ensure delivery",
                "correct": "0"
            },
            {
                "text": "The encryption of data packets for security purposes",
                "correct": "0"
            },
            {
                "text": "The discarding of data packets in a network",
                "correct": "1"
            },
            {
                "text": "The intentional slowing down of data transmission",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is considered an acceptable error rate in general terms?\n",
        "options": [
            {
                "text": "Exactly 5 percent",
                "correct": "0"
            },
            {
                "text": "Under 1 percent",
                "correct": "1"
            },
            {
                "text": "Over 15 percent",
                "correct": "0"
            },
            {
                "text": "Under 10 percent",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the significance of monitoring queue length in network performance?\n",
        "options": [
            {
                "text": "It helps determine whether the link is a bottleneck.",
                "correct": "1"
            },
            {
                "text": "It indicates the total number of users in the network.",
                "correct": "0"
            },
            {
                "text": "It shows the financial cost of data transfer.",
                "correct": "0"
            },
            {
                "text": "It measures the physical condition of the network interface.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What role does a NetFlow exporter play in a network?\n",
        "options": [
            {
                "text": "It analyzes and reports flow information.",
                "correct": "0"
            },
            {
                "text": "It aggregates flows from multiple collectors.",
                "correct": "0"
            },
            {
                "text": "It defines cache flows.",
                "correct": "1"
            },
            {
                "text": "It increases the bandwidth of the network.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the primary purpose of monitoring individual interface statistics in a network?\n",
        "options": [
            {
                "text": "To increase the network speed",
                "correct": "0"
            },
            {
                "text": "To diagnose performance issues",
                "correct": "1"
            },
            {
                "text": "To reduce the cost of network maintenance",
                "correct": "0"
            },
            {
                "text": "To enhance the security of network communications",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Why is collecting just the packet metadata preferred over recording each frame?\n",
        "options": [
            {
                "text": "It reduces the bandwidth required by the sniffer.",
                "correct": "1"
            },
            {
                "text": "It increases the network speed.",
                "correct": "0"
            },
            {
                "text": "It enhances the security of the network.",
                "correct": "0"
            },
            {
                "text": "It imposes a heavy processing overhead.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What do \"top talkers\" and \"top listeners\" refer to in network analysis?\n",
        "options": [
            {
                "text": "Top talkers are the most secure connections in a network, and top listeners are the least secure connections.",
                "correct": "0"
            },
            {
                "text": "Top talkers are devices with the highest error rates in the network, while top listeners are devices with the highest packet loss rates.",
                "correct": "0"
            },
            {
                "text": "Top talkers are the fastest network connections, while top listeners are the slowest network connections.",
                "correct": "0"
            },
            {
                "text": "Top talkers are interfaces generating the most outgoing traffic, while top listeners are the interfaces receiving the most incoming traffic.",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What advantage do website performance checkers offer for testing site response times?\n",
        "options": [
            {
                "text": "They increase website traffic automatically.",
                "correct": "0"
            },
            {
                "text": "They design websites.",
                "correct": "0"
            },
            {
                "text": "They test from the perspective of customers in different countries.",
                "correct": "1"
            },
            {
                "text": "They can physically repair websites.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which of the following is NOT a traffic class defined by DiffServ?\n",
        "options": [
            {
                "text": "Maximum Throughput",
                "correct": "1"
            },
            {
                "text": "Expedited Forwarding",
                "correct": "0"
            },
            {
                "text": "Best Effort",
                "correct": "0"
            },
            {
                "text": "Assured Forwarding",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the primary purpose of using Quality of Service (QoS) mechanisms in a network?\n",
        "options": [
            {
                "text": "To reduce the cost of network infrastructure",
                "correct": "0"
            },
            {
                "text": "To prioritize certain types of traffic over others",
                "correct": "1"
            },
            {
                "text": "To decrease network security",
                "correct": "0"
            },
            {
                "text": "To increase the number of devices that can connect to the network",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "A network administrator is tasked with improving the performance of a company's VoIP (Voice over Internet Protocol) system,\nwhich has been experiencing poor audio quality during peak business hours.\nThe network is also used for email, web browsing, and file transfers. The administrator decides to implement a solution\nto prioritize VoIP traffic over other types of traffic.\nWhich of the following solutions would be MOST effective in achieving the desired improvement in VoIP performance?\n",
        "options": [
            {
                "text": "Implementing a First-In, First-Out (FIFO) queuing discipline across the network.",
                "correct": "0"
            },
            {
                "text": "Deploying traffic shaping to prioritize VoIP packets.",
                "correct": "1"
            },
            {
                "text": "Increasing the bandwidth of the company's internet connection.",
                "correct": "0"
            },
            {
                "text": "Configuring a Random Early Detection (RED) algorithm on all network switches.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is a potential consequence of using traffic policing devices instead of traffic shapers?\n",
        "options": [
            {
                "text": "Increased latency for non-critical applications",
                "correct": "0"
            },
            {
                "text": "More efficient use of available bandwidth",
                "correct": "0"
            },
            {
                "text": "Fewer lost packets during periods of congestion",
                "correct": "0"
            },
            {
                "text": "Under-utilization of bandwidth during idle periods",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the primary function of traffic shapers?\n",
        "options": [
            {
                "text": "To categorize protocols into different service levels",
                "correct": "0"
            },
            {
                "text": "To delay certain packet types based on their content",
                "correct": "1"
            },
            {
                "text": "To increase the speed of packet delivery",
                "correct": "0"
            },
            {
                "text": "To monitor traffic conditions and generate reports",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What does \"availability\" in the CIA Triad refer to?\n",
        "options": [
            {
                "text": "The system is protected against unauthorized access and attacks and disclosure.",
                "correct": "0"
            },
            {
                "text": "The data is stored and transferred as intended and that any modification is authorized.",
                "correct": "0"
            },
            {
                "text": "Information and resources are accessible to those authorized when needed.",
                "correct": "1"
            },
            {
                "text": "Information is protected from unauthorized access except to those with the proper permissions.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What does \"integrity\" in the context of the CIA Triad mean?\n",
        "options": [
            {
                "text": "The data is stored and transferred as intended and that any modification is authorized.",
                "correct": "1"
            },
            {
                "text": "The system is protected against unauthorized access and attacks.",
                "correct": "0"
            },
            {
                "text": "Information is accessible to those authorized to view or modify it.",
                "correct": "0"
            },
            {
                "text": "Certain information should only be known to certain people.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the purpose of a cybersecurity audit?\n",
        "options": [
            {
                "text": "To train employees on cybersecurity best practices",
                "correct": "0"
            },
            {
                "text": "To assess the organization's IT budget",
                "correct": "0"
            },
            {
                "text": "To install security software on all company devices",
                "correct": "0"
            },
            {
                "text": "To ensure a security posture aligns with established standards",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What does a risk assessment involve?\n",
        "options": [
            {
                "text": "Conducting physical security checks on company premises",
                "correct": "0"
            },
            {
                "text": "Reviewing employee performance and productivity",
                "correct": "0"
            },
            {
                "text": "Auditing the company's systems for risk factors",
                "correct": "1"
            },
            {
                "text": "Auditing the company's financial statements for fraud",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the difficulty in implementing security controls?\n",
        "options": [
            {
                "text": "They can be expensive.",
                "correct": "1"
            },
            {
                "text": "They only address low-level risks.",
                "correct": "0"
            },
            {
                "text": "They are not supported by IT service frameworks.",
                "correct": "0"
            },
            {
                "text": "They are always too complex to implement.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What does data locality require?\n",
        "options": [
            {
                "text": "Data storage within certain geographical boundaries",
                "correct": "1"
            },
            {
                "text": "Unlimited data transfer between countries",
                "correct": "0"
            },
            {
                "text": "Data to be stored in the cloud",
                "correct": "0"
            },
            {
                "text": "Data to be encrypted at all times",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Under what condition can an organization process credit card transactions directly?\n",
        "options": [
            {
                "text": "If they adopt the PCI DSS standard",
                "correct": "1"
            },
            {
                "text": "If they use cloud storage",
                "correct": "0"
            },
            {
                "text": "If they encrypt all their emails",
                "correct": "0"
            },
            {
                "text": "If they have an internet presence",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is Personally Identifiable Information (PII)?\n",
        "options": [
            {
                "text": "Any data that can be publicly accessed",
                "correct": "0"
            },
            {
                "text": "Data that can identify, contact, or locate an individual",
                "correct": "1"
            },
            {
                "text": "Data that is encrypted and stored securely",
                "correct": "0"
            },
            {
                "text": "Information related to a company's financial status",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the role of encryption in an access control solution?\n",
        "options": [
            {
                "text": "To give readable access to data",
                "correct": "0"
            },
            {
                "text": "To convert plaintext into ciphertext",
                "correct": "1"
            },
            {
                "text": "To physically secure devices and resources",
                "correct": "0"
            },
            {
                "text": "To serve as the only method of access control",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What does a ciphertext represent in the context of encryption?\n",
        "options": [
            {
                "text": "The original human-readable information",
                "correct": "0"
            },
            {
                "text": "The encrypted version of plaintext",
                "correct": "1"
            },
            {
                "text": "The key used to encrypt the plaintext",
                "correct": "0"
            },
            {
                "text": "The conversion of plaintext into a hash",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is meant by \"data at rest\"?\n",
        "options": [
            {
                "text": "Data stored on a persistent storage media",
                "correct": "1"
            },
            {
                "text": "Data present in volatile memory",
                "correct": "0"
            },
            {
                "text": "Data being transmitted over a network",
                "correct": "0"
            },
            {
                "text": "Data being actively processed by a computer",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What can the most serious vulnerabilities allow an attacker to do?\n",
        "options": [
            {
                "text": "Encrypt system files for data protection",
                "correct": "0"
            },
            {
                "text": "Execute arbitrary code on the system",
                "correct": "1"
            },
            {
                "text": "Improve application security",
                "correct": "0"
            },
            {
                "text": "Increase system performance",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What poses a greater threat than zero-day vulnerabilities?\n",
        "options": [
            {
                "text": "Encrypted data storage",
                "correct": "0"
            },
            {
                "text": "Strong password policies",
                "correct": "0"
            },
            {
                "text": "Unpatched or legacy systems",
                "correct": "1"
            },
            {
                "text": "Newly released software",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is one of the key benefits of using a honeypot or honeynet in cybersecurity?\n",
        "options": [
            {
                "text": "Increasing the encryption strength",
                "correct": "0"
            },
            {
                "text": "Reducing the need for other security measures",
                "correct": "0"
            },
            {
                "text": "Completely eliminating cyber threats",
                "correct": "0"
            },
            {
                "text": "Providing an early warning of attacks",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is a honeypot in the context of cybersecurity?\n",
        "options": [
            {
                "text": "A computer system set up to attract attackers",
                "correct": "1"
            },
            {
                "text": "A firewall configuration technique",
                "correct": "0"
            },
            {
                "text": "A software tool used for encrypting data",
                "correct": "0"
            },
            {
                "text": "A type of malware designed to steal data",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which of the following best describes behavioral threat research?\n",
        "options": [
            {
                "text": "A database of all known computer viruses",
                "correct": "0"
            },
            {
                "text": "A method for improving the encryption of data",
                "correct": "0"
            },
            {
                "text": "A commentary describing examples of attacks and TTPs",
                "correct": "1"
            },
            {
                "text": "A set of guidelines for installing security software",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What distinguishes an external threat actor from an internal threat actor?\n",
        "options": [
            {
                "text": "Whether they have authorized access to the system",
                "correct": "1"
            },
            {
                "text": "The sophistication of the attack",
                "correct": "0"
            },
            {
                "text": "The type of malware they use",
                "correct": "0"
            },
            {
                "text": "The geographical location of the actor",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What can be a source of internal threats?\n",
        "options": [
            {
                "text": "Phishing emails from unknown senders",
                "correct": "0"
            },
            {
                "text": "Malware found on the Internet",
                "correct": "0"
            },
            {
                "text": "Employees within the organization",
                "correct": "1"
            },
            {
                "text": "Hackers from another country",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the primary goal of most adversaries when launching network attacks?\n",
        "options": [
            {
                "text": "To improve network security",
                "correct": "0"
            },
            {
                "text": "To provide free services to users",
                "correct": "0"
            },
            {
                "text": "To enhance network performance",
                "correct": "0"
            },
            {
                "text": "To steal information from the network",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the primary difference between footprinting and fingerprinting in network attacks?\n",
        "options": [
            {
                "text": "Footprinting is used to enhance network security, while fingerprinting is used to decrease it.",
                "correct": "0"
            },
            {
                "text": "Footprinting aims to improve network performance, while fingerprinting does not.",
                "correct": "0"
            },
            {
                "text": "Fingerprinting is a legal method of gathering information, while footprinting is not.",
                "correct": "0"
            },
            {
                "text": "Footprinting gathers general network information, while fingerprinting identifies specific device types.",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the purpose of spoofing attacks?\n",
        "options": [
            {
                "text": "To enhance the performance of ARP services",
                "correct": "0"
            },
            {
                "text": "To disguise the attacker's identity",
                "correct": "1"
            },
            {
                "text": "To improve the security of DNS services",
                "correct": "0"
            },
            {
                "text": "To provide legitimate services to users",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is an example of an inadvertent vulnerability that users can create?\n",
        "options": [
            {
                "text": "Regularly updating software and applications",
                "correct": "0"
            },
            {
                "text": "Employing multi-factor authentication",
                "correct": "0"
            },
            {
                "text": "Using shadow IT without authorization",
                "correct": "1"
            },
            {
                "text": "Implementing strong encryption algorithms",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "How are botnets typically created?\n",
        "options": [
            {
                "text": "Through malware that opens a backdoor",
                "correct": "1"
            },
            {
                "text": "By updating devices with the latest firmware",
                "correct": "0"
            },
            {
                "text": "Through the use of strong passwords",
                "correct": "0"
            },
            {
                "text": "By installing security software on devices",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is a Distributed Reflection DoS (DRDoS) attack?\n",
        "options": [
            {
                "text": "A type of attack where the victim's IP address is spoofed",
                "correct": "1"
            },
            {
                "text": "An attack that directly targets the attacker's network",
                "correct": "0"
            },
            {
                "text": "A method to reduce network bandwidth consumption",
                "correct": "0"
            },
            {
                "text": "An attack that improves server reflection capabilities",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "A cyber security technician responds to a department experiencing degraded network bandwidth, and customers call the department saying they cannot visit the company website.\nWhat is likely causing the issue?\n",
        "options": [
            {
                "text": "Malware",
                "correct": "0"
            },
            {
                "text": "Distributed DoS (DDoS)",
                "correct": "1"
            },
            {
                "text": "DNS Poisoning",
                "correct": "0"
            },
            {
                "text": "On-path attack",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What types of devices are vulnerable to becoming part of a botnet?\n",
        "options": [
            {
                "text": "Only outdated computers",
                "correct": "0"
            },
            {
                "text": "Devices without Internet access",
                "correct": "0"
            },
            {
                "text": "Only servers and mainframes",
                "correct": "0"
            },
            {
                "text": "Any type of Internet-enabled device",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What does the term \"advanced persistent threat (APT)\" refer to in the context of malware?\n",
        "options": [
            {
                "text": "A sophisticated malware attack that remains undetected",
                "correct": "1"
            },
            {
                "text": "A firewall feature that blocks all incoming traffic",
                "correct": "0"
            },
            {
                "text": "A type of antivirus software",
                "correct": "0"
            },
            {
                "text": "A basic form of malware that is easily detected and removed",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is malware?\n",
        "options": [
            {
                "text": "A type of computer hardware that performs poorly",
                "correct": "0"
            },
            {
                "text": "Software that performs malicious actions",
                "correct": "1"
            },
            {
                "text": "A beneficial software tool that enhances system performance",
                "correct": "0"
            },
            {
                "text": "Software designed to protect computer networks",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What does the payload of malware refer to?\n",
        "options": [
            {
                "text": "The malware action other than replication",
                "correct": "1"
            },
            {
                "text": "The method by which the malware spreads",
                "correct": "0"
            },
            {
                "text": "The amount of data the malware can steal",
                "correct": "0"
            },
            {
                "text": "The size of the malware file",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What are Potentially Unwanted Programs (PUPs)/Potentially Unwanted Applications (PUAs)?\n",
        "options": [
            {
                "text": "Software installed alongside a package selected by the user",
                "correct": "0"
            },
            {
                "text": "Applications that cannot be uninstalled by the user",
                "correct": "0"
            },
            {
                "text": "Software that is always malicious and installed without the user's consent",
                "correct": "1"
            },
            {
                "text": "Programs that enhance computer security without the user's knowledge",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the primary purpose of ARP poisoning in an on-path attack?\n",
        "options": [
            {
                "text": "To physically damage the network infrastructure.",
                "correct": "0"
            },
            {
                "text": "To encrypt all data packets on the network.",
                "correct": "0"
            },
            {
                "text": "To redirect traffic through the attacker.",
                "correct": "1"
            },
            {
                "text": "To increase the efficiency of the ARP protocol.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the result of a successful ARP poisoning attack?\n",
        "options": [
            {
                "text": "The network's speed is significantly increased.",
                "correct": "0"
            },
            {
                "text": "The attacker receives all traffic destined for remote networks.",
                "correct": "1"
            },
            {
                "text": "The attacker's device is disconnected from the network.",
                "correct": "0"
            },
            {
                "text": "All network traffic is encrypted automatically.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the primary difference between ARP spoofing and ARP poisoning?\n",
        "options": [
            {
                "text": "ARP spoofing involves broadcasting fake ARP messages, while ARP poisoning refers to the state of the ARP cache.",
                "correct": "1"
            },
            {
                "text": "ARP poisoning is used to secure network communications, whereas ARP spoofing is a malicious activity.",
                "correct": "0"
            },
            {
                "text": "ARP spoofing is a passive attack while ARP poisoning is an active attack.",
                "correct": "0"
            },
            {
                "text": "ARP spoofing and ARP poisoning are terms for the same process, with no difference between them.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is an on-path attack?\n",
        "options": [
            {
                "text": "A type of physical attack where the attacker physically intercepts a data transmission.",
                "correct": "0"
            },
            {
                "text": "A cyber-attack that exclusively targets the path of data storage devices.",
                "correct": "0"
            },
            {
                "text": "A type of spoofing attack where a threat actor intercepts communications between two hosts.",
                "correct": "1"
            },
            {
                "text": "An attack where the threat actor creates a new path in a network to reroute data.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is MAC spoofing?\n",
        "options": [
            {
                "text": "Intercepting MAC addresses during data transmission",
                "correct": "0"
            },
            {
                "text": "Physically altering the network interface to change its MAC address",
                "correct": "0"
            },
            {
                "text": "Using malware to reveal the MAC address of a device",
                "correct": "0"
            },
            {
                "text": "Changing the MAC address of a network interface to any arbitrary value",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What happens when a switch's MAC address table is overwhelmed due to a MAC flooding attack?\n",
        "options": [
            {
                "text": "The switch increases its memory capacity automatically.",
                "correct": "0"
            },
            {
                "text": "The switch only forwards traffic to the attacker's port.",
                "correct": "0"
            },
            {
                "text": "The switch begins to function as a hub.",
                "correct": "1"
            },
            {
                "text": "The switch automatically shuts down for security reasons.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "How do attackers exploit the native VLAN feature in a VLAN hopping attack?\n",
        "options": [
            {
                "text": "By crafting a frame with two VLAN tag headers",
                "correct": "1"
            },
            {
                "text": "By sending a frame with three VLAN tag headers",
                "correct": "0"
            },
            {
                "text": "By deleting the native VLAN from the switch configuration",
                "correct": "0"
            },
            {
                "text": "By encrypting the traffic sent to the native VLAN",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is VLAN hopping?\n",
        "options": [
            {
                "text": "A method to increase the speed of VLAN traffic",
                "correct": "0"
            },
            {
                "text": "An attack designed to send traffic to a VLAN other than the one the host system is in",
                "correct": "1"
            },
            {
                "text": "A technique to reduce network congestion",
                "correct": "0"
            },
            {
                "text": "A security feature of 802.1Q to enhance VLAN compatibility",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What feature of 802.1Q do VLAN hopping attacks exploit?\n",
        "options": [
            {
                "text": "Native VLANs",
                "correct": "1"
            },
            {
                "text": "Port mirroring",
                "correct": "0"
            },
            {
                "text": "Access control lists (ACLs)",
                "correct": "0"
            },
            {
                "text": "Port security",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the primary purpose of the Spanning Tree Protocol (STP) in a network?\n",
        "options": [
            {
                "text": "To encrypt traffic between switches",
                "correct": "0"
            },
            {
                "text": "To facilitate VLAN hopping attacks",
                "correct": "0"
            },
            {
                "text": "To prevent switching loops",
                "correct": "1"
            },
            {
                "text": "To increase network bandwidth",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is a common consequence of rogue devices and services in a network?\n",
        "options": [
            {
                "text": "Creation of new unmonitored attack surfaces.",
                "correct": "1"
            },
            {
                "text": "Improved network efficiency.",
                "correct": "0"
            },
            {
                "text": "Increased network security.",
                "correct": "0"
            },
            {
                "text": "Reduction in IT department workload.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which of the following can be considered a rogue device?\n",
        "options": [
            {
                "text": "An officially sanctioned DHCP server",
                "correct": "0"
            },
            {
                "text": "A company-issued laptop with up-to-date security software",
                "correct": "0"
            },
            {
                "text": "A wireless access point installed without IT approval",
                "correct": "1"
            },
            {
                "text": "A firewall configured by the network security team",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which of the following is a potential consequence of a rogue DHCP server changing the default gateway address for a subnet?\n",
        "options": [
            {
                "text": "Improved network security and encryption",
                "correct": "0"
            },
            {
                "text": "Routing communications through the attacker's machine",
                "correct": "1"
            },
            {
                "text": "Automatic resolution of IP address conflicts",
                "correct": "0"
            },
            {
                "text": "Increased internet speed for all clients",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is a DHCP starvation attack?\n",
        "options": [
            {
                "text": "An attack that encrypts all DHCP traffic",
                "correct": "0"
            },
            {
                "text": "An attack that floods the network with excessive data",
                "correct": "0"
            },
            {
                "text": "An attack that physically damages the DHCP server",
                "correct": "0"
            },
            {
                "text": "An attack that exhausts a DHCP server's address pool",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the MOST likely cause of clients ending up with an incorrect IP configuration?\n",
        "options": [
            {
                "text": "A faulty Ethernet cable",
                "correct": "0"
            },
            {
                "text": "A rogue DHCP server on the network",
                "correct": "1"
            },
            {
                "text": "Overloaded network traffic",
                "correct": "0"
            },
            {
                "text": "Incorrect subnet mask settings on the client",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is DNS server cache poisoning?\n",
        "options": [
            {
                "text": "Infecting a DNS server with malware to disrupt its operation",
                "correct": "0"
            },
            {
                "text": "Stealing sensitive information from a DNS server's cache",
                "correct": "0"
            },
            {
                "text": "Physically damaging a DNS server to take it offline",
                "correct": "0"
            },
            {
                "text": "Inserting false domain:IP mappings into a DNS server's cache",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is a common indicator of a compromised machine in the context of DNS attacks?\n",
        "options": [
            {
                "text": "High CPU usage",
                "correct": "0"
            },
            {
                "text": "Slow internet connection",
                "correct": "0"
            },
            {
                "text": "Frequent system crashes",
                "correct": "0"
            },
            {
                "text": "Suspect entries in the HOSTS file",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the purpose of the HOSTS file in DNS resolution?\n",
        "options": [
            {
                "text": "To log DNS query errors",
                "correct": "0"
            },
            {
                "text": "To act as a backup for DNS servers",
                "correct": "0"
            },
            {
                "text": "To store the user's browsing history",
                "correct": "0"
            },
            {
                "text": "To map domain names to IP addresses",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is DNS spoofing?\n",
        "options": [
            {
                "text": "Manipulating cached DNS records",
                "correct": "0"
            },
            {
                "text": "Attacking the physical infrastructure of DNS servers",
                "correct": "0"
            },
            {
                "text": "Using false DNS requests or replies",
                "correct": "1"
            },
            {
                "text": "Infecting DNS servers with malware",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the primary difference between DNS spoofing and DNS poisoning?\n",
        "options": [
            {
                "text": "Spoofing targets only private networks, while poisoning targets public networks",
                "correct": "0"
            },
            {
                "text": "Spoofing uses false DNS requests, while poisoning manipulates cached records",
                "correct": "1"
            },
            {
                "text": "Spoofing involves physical attacks on DNS servers, while poisoning does not",
                "correct": "0"
            },
            {
                "text": "Spoofing is a legal method of redirecting traffic, while poisoning is not",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "On your way into the back entrance of your work building one morning, a man dressed as a plumber asks you to let him in so he can fix the restroom.\nWhat should you do?\n",
        "options": [
            {
                "text": "Tell him no and quickly close the door.",
                "correct": "0"
            },
            {
                "text": "Direct him to the front entrance and instruct him to check in with the receptionist.",
                "correct": "1"
            },
            {
                "text": "Let him in and help him find the restroom. Then let him work.",
                "correct": "0"
            },
            {
                "text": "Let him in.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which of the following examples BEST describes shoulder surfing?\n",
        "options": [
            {
                "text": "Giving someone you trust your username and account password",
                "correct": "0"
            },
            {
                "text": "Someone nearby watching you enter your password on your computer and recording it",
                "correct": "1"
            },
            {
                "text": "Finding someone's password in the trash can and using it to access their account",
                "correct": "0"
            },
            {
                "text": "Guessing someone's password because it is so common or simple",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which password cracking method involves trying every possible combination to find the matching password?\n",
        "options": [
            {
                "text": "Social Engineering",
                "correct": "0"
            },
            {
                "text": "Phishing",
                "correct": "0"
            },
            {
                "text": "Brute Force",
                "correct": "1"
            },
            {
                "text": "Dictionary",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Why are longer and more complex passwords more secure against brute force attacks?\n",
        "options": [
            {
                "text": "They are easier to remember.",
                "correct": "0"
            },
            {
                "text": "They take less time to crack.",
                "correct": "0"
            },
            {
                "text": "They are less likely to be stored in password files.",
                "correct": "0"
            },
            {
                "text": "They increase the amount of time the attack takes to run.",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is a common way for threat actors to gain access to a network?\n",
        "options": [
            {
                "text": "By physically breaking into server rooms",
                "correct": "0"
            },
            {
                "text": "By guessing the network IP address",
                "correct": "0"
            },
            {
                "text": "By sending formal requests for access to the IT department",
                "correct": "0"
            },
            {
                "text": "By obtaining credentials to access the network",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which factor determines the type of credential a subject can use for authentication?\n",
        "options": [
            {
                "text": "Identification process",
                "correct": "0"
            },
            {
                "text": "Authentication factor",
                "correct": "1"
            },
            {
                "text": "Authorization model",
                "correct": "0"
            },
            {
                "text": "Accounting system",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is a mandatory model in authorization?\n",
        "options": [
            {
                "text": "A model based on the subject's role",
                "correct": "0"
            },
            {
                "text": "A model where rights are allocated by the system administrator",
                "correct": "0"
            },
            {
                "text": "A model where rights are predetermined by system-enforced rules",
                "correct": "1"
            },
            {
                "text": "A model based on the subject's attributes",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which of the following is an example of a behavioral factor used in authentication?\n",
        "options": [
            {
                "text": "Smart card",
                "correct": "0"
            },
            {
                "text": "Password",
                "correct": "0"
            },
            {
                "text": "Fingerprint",
                "correct": "0"
            },
            {
                "text": "Making a signature",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is considered a knowledge factor in authentication?\n",
        "options": [
            {
                "text": "A password",
                "correct": "1"
            },
            {
                "text": "A mobile device",
                "correct": "0"
            },
            {
                "text": "A fingerprint",
                "correct": "0"
            },
            {
                "text": "A smart card",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Why are behavioral, location, and time factors not reliable enough to be used as single factors in authentication?\n",
        "options": [
            {
                "text": "They are not recognized by authentication systems.",
                "correct": "0"
            },
            {
                "text": "They are not specific or reliable enough.",
                "correct": "1"
            },
            {
                "text": "They are too easy to fake.",
                "correct": "0"
            },
            {
                "text": "They are too difficult to measure.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which of the following combinations represents two-factor authentication?\n",
        "options": [
            {
                "text": "Password and the time of login",
                "correct": "0"
            },
            {
                "text": "Two different passwords",
                "correct": "0"
            },
            {
                "text": "Password and a user's favorite color",
                "correct": "0"
            },
            {
                "text": "Password and a smart card",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the preferred system for Windows network authentication?\n",
        "options": [
            {
                "text": "NT LAN Manager (NTLM)",
                "correct": "0"
            },
            {
                "text": "OAuth",
                "correct": "0"
            },
            {
                "text": "Kerberos",
                "correct": "1"
            },
            {
                "text": "SAML",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Why are passwords stored as cryptographic hashes?\n",
        "options": [
            {
                "text": "To ensure passwords can be easily recovered if forgotten",
                "correct": "0"
            },
            {
                "text": "To prevent a password from being easily compromised",
                "correct": "1"
            },
            {
                "text": "To allow users to choose simpler passwords",
                "correct": "0"
            },
            {
                "text": "To increase the speed of the authentication process",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What framework does Windows use to provide Single Sign-On (SSO) authentication?\n",
        "options": [
            {
                "text": "OAuth",
                "correct": "0"
            },
            {
                "text": "LDAP",
                "correct": "0"
            },
            {
                "text": "Kerberos",
                "correct": "1"
            },
            {
                "text": "SAML",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What does the Ticket Granting Ticket (TGT) provide in the Kerberos authentication process?\n",
        "options": [
            {
                "text": "The ability to request Service Tickets from the TGS",
                "correct": "1"
            },
            {
                "text": "Authentication for user logon requests",
                "correct": "0"
            },
            {
                "text": "Immediate access to all network resources",
                "correct": "0"
            },
            {
                "text": "A token that grants access to a target application server",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the role of a Certificate Authority (CA) in PKI?\n",
        "options": [
            {
                "text": "To guarantee the validity of digital certificates",
                "correct": "1"
            },
            {
                "text": "To generate symmetric session keys",
                "correct": "0"
            },
            {
                "text": "To encrypt messages with public keys",
                "correct": "0"
            },
            {
                "text": "To distribute private keys to users",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is a key pair in public key cryptography?\n",
        "options": [
            {
                "text": "A set of two keys, one public and one private, used together",
                "correct": "1"
            },
            {
                "text": "A set of two keys, one for signing and one for verification",
                "correct": "0"
            },
            {
                "text": "Two identical keys used for encryption and decryption",
                "correct": "0"
            },
            {
                "text": "Two public keys used interchangeably",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the main goal of storing encryption keys securely?\n",
        "options": [
            {
                "text": "To increase the key's strength",
                "correct": "0"
            },
            {
                "text": "To prevent unauthorized access",
                "correct": "1"
            },
            {
                "text": "To facilitate key revocation",
                "correct": "0"
            },
            {
                "text": "To ensure easy access for all users",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is a key component of federated identity management?\n",
        "options": [
            {
                "text": "Single sign-on with a single password for all accounts",
                "correct": "0"
            },
            {
                "text": "Claims-based identity",
                "correct": "1"
            },
            {
                "text": "Password synchronization",
                "correct": "0"
            },
            {
                "text": "Active Directory",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is a key difference between RADIUS and TACACS+ in terms of protocol functionality?\n",
        "options": [
            {
                "text": "TACACS+ is only used for wireless access, while RADIUS is not.",
                "correct": "0"
            },
            {
                "text": "TACACS+ uses UDP for communication, while RADIUS uses TCP.",
                "correct": "0"
            },
            {
                "text": "TACACS+ separates AAA functions, while RADIUS does not.",
                "correct": "1"
            },
            {
                "text": "RADIUS encrypts the entire authentication process, while TACACS+ does not.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the primary purpose of authorization in network systems?\n",
        "options": [
            {
                "text": "To encrypt data",
                "correct": "0"
            },
            {
                "text": "To authenticate user identities",
                "correct": "0"
            },
            {
                "text": "To allocate rights and permissions",
                "correct": "1"
            },
            {
                "text": "To monitor network traffic",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which of the following statements BEST describes a key principle of the Discretionary Access Control (DAC) model?\n",
        "options": [
            {
                "text": "Access permissions are assigned based on the sensitivity of the data.",
                "correct": "0"
            },
            {
                "text": "Every resource has an owner.",
                "correct": "1"
            },
            {
                "text": "Users are assigned roles based on their job functions.",
                "correct": "0"
            },
            {
                "text": "Permissions are centrally managed by a security administrator.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "How does RBAC differ from using security groups for assigning permissions?\n",
        "options": [
            {
                "text": "Security groups encrypt data, while RBAC does not.",
                "correct": "0"
            },
            {
                "text": "RBAC focuses on job roles, while security groups are about user identity.",
                "correct": "1"
            },
            {
                "text": "RBAC is discretionary, while security groups are nondiscretionary.",
                "correct": "0"
            },
            {
                "text": "RBAC assigns permissions directly to users, while security groups do not.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What does the principle of least privilege entail in the context of PAM?\n",
        "options": [
            {
                "text": "Granting users unlimited rights to perform their job",
                "correct": "0"
            },
            {
                "text": "Allowing users to determine their access rights",
                "correct": "0"
            },
            {
                "text": "Providing all users with administrative privileges",
                "correct": "0"
            },
            {
                "text": "Granting users only the rights necessary to perform their job",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What role does separation of duties play in PAM?\n",
        "options": [
            {
                "text": "It allows users to choose their responsibilities.",
                "correct": "0"
            },
            {
                "text": "It divides responsibilities among individuals to prevent abuse of power.",
                "correct": "1"
            },
            {
                "text": "It consolidates duties to streamline management.",
                "correct": "0"
            },
            {
                "text": "It ensures all users have the same level of access.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What does an access key contain when generated by the server's security service for an authenticated user?\n",
        "options": [
            {
                "text": "The user's browsing history and application usage",
                "correct": "0"
            },
            {
                "text": "The user's username and group memberships",
                "correct": "1"
            },
            {
                "text": "The user's password and login time",
                "correct": "0"
            },
            {
                "text": "The IP address and MAC address of the user's device",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "In an LDAP distinguished name (DN), how are the components of the name structured?\n",
        "options": [
            {
                "text": "In a hierarchical tree structure",
                "correct": "0"
            },
            {
                "text": "Through a sequence of encrypted tokens",
                "correct": "0"
            },
            {
                "text": "As a list of user-defined keywords",
                "correct": "0"
            },
            {
                "text": "As a series of attribute=value pairs",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is LDAP primarily used for?\n",
        "options": [
            {
                "text": "Transferring files between computers",
                "correct": "0"
            },
            {
                "text": "Querying and updating directory services",
                "correct": "1"
            },
            {
                "text": "Managing network devices and configurations",
                "correct": "0"
            },
            {
                "text": "Encrypting data transmissions over the Internet",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which of the following best describes the purpose of an access control policy in LDAP?\n",
        "options": [
            {
                "text": "To determine the encryption method used for LDAP communications.",
                "correct": "0"
            },
            {
                "text": "To set the network ports that LDAP will use for communications.",
                "correct": "0"
            },
            {
                "text": "To configure the digital certificates for LDAPS.",
                "correct": "0"
            },
            {
                "text": "To specify which users can access the LDAP directory.",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "Why should anonymous and simple bind access methods be disabled on an LDAP server requiring secure access?\n",
        "options": [
            {
                "text": "They transmit data in plaintext.",
                "correct": "1"
            },
            {
                "text": "They are the most secure methods of authentication.",
                "correct": "0"
            },
            {
                "text": "They use digital certificates for all connections.",
                "correct": "0"
            },
            {
                "text": "They provide encryption automatically.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "How has the concept of the network edge changed due to the erosion of the perimeter security model?\n",
        "options": [
            {
                "text": "It has expanded to include access switches and wireless access points.",
                "correct": "1"
            },
            {
                "text": "It has become more focused on the physical location of the network.",
                "correct": "0"
            },
            {
                "text": "It has been eliminated entirely.",
                "correct": "0"
            },
            {
                "text": "It has become synonymous with the firewall.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the perimeter security model primarily focused on?\n",
        "options": [
            {
                "text": "Monitoring and controlling internal network traffic",
                "correct": "0"
            },
            {
                "text": "Encrypting data stored on the network",
                "correct": "0"
            },
            {
                "text": "Trusting all connections within the internal network",
                "correct": "1"
            },
            {
                "text": "Preventing unauthorized external access",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the minimum recommended password length for network appliances according to the document?\n",
        "options": [
            {
                "text": "14 characters",
                "correct": "1"
            },
            {
                "text": "12 characters",
                "correct": "0"
            },
            {
                "text": "8 characters",
                "correct": "0"
            },
            {
                "text": "10 characters",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What does role-based access control aim to achieve?\n",
        "options": [
            {
                "text": "Limit permissions based on administrative roles.",
                "correct": "1"
            },
            {
                "text": "Increase the number of administrators.",
                "correct": "0"
            },
            {
                "text": "Reduce the complexity of permissions.",
                "correct": "0"
            },
            {
                "text": "Allow all users equal access.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What should be done to secure SNMP traffic?\n",
        "options": [
            {
                "text": "Disable SNMP entirely.",
                "correct": "0"
            },
            {
                "text": "Limit SNMP traffic to internal networks.",
                "correct": "0"
            },
            {
                "text": "Configure SNMPv3 or use IPSec for encryption.",
                "correct": "1"
            },
            {
                "text": "Use the original versions of SNMP.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What does MAC filtering on a switch allow an administrator to do?\n",
        "options": [
            {
                "text": "Assign specific IP addresses to MAC addresses.",
                "correct": "0"
            },
            {
                "text": "Define which MAC addresses are permitted to connect to a particular port.",
                "correct": "1"
            },
            {
                "text": "Monitor the amount of data transmitted by each MAC address.",
                "correct": "0"
            },
            {
                "text": "Limit the bandwidth usage per MAC address.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What does \"protect mode\" do when a switch port enters a violation state?\n",
        "options": [
            {
                "text": "It disables the port and sends alerts.",
                "correct": "0"
            },
            {
                "text": "It encrypts traffic from the invalid source address.",
                "correct": "0"
            },
            {
                "text": "It reroutes traffic from the invalid source address to a quarantine VLAN.",
                "correct": "0"
            },
            {
                "text": "It drops frames from the invalid source address but keeps the interface open.",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which of the following is a vulnerability that still exists even with restricted access to physical switch ports and hardware?\n",
        "options": [
            {
                "text": "Overheating of network equipment",
                "correct": "0"
            },
            {
                "text": "Rogue administrators",
                "correct": "1"
            },
            {
                "text": "Incompatibility with older network protocols",
                "correct": "0"
            },
            {
                "text": "Increased network latency",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What does a health policy in NAC solutions typically require from a client?\n",
        "options": [
            {
                "text": "An attestation report",
                "correct": "1"
            },
            {
                "text": "A user activity log",
                "correct": "0"
            },
            {
                "text": "A financial report",
                "correct": "0"
            },
            {
                "text": "A network performance analysis",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "In the context of IEEE 802.1X, what is the role of a switch configured as a RADIUS client?\n",
        "options": [
            {
                "text": "To encrypt network traffic",
                "correct": "0"
            },
            {
                "text": "To manage network storage",
                "correct": "0"
            },
            {
                "text": "To forward authentication data",
                "correct": "1"
            },
            {
                "text": "To distribute IP addresses",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "In which scenario is the Extensible Authentication Protocol (EAP) typically used?\n",
        "options": [
            {
                "text": "When a user is downloading a file from the Internet",
                "correct": "0"
            },
            {
                "text": "When browsing social media platforms",
                "correct": "0"
            },
            {
                "text": "When a user is accessing a wireless network",
                "correct": "1"
            },
            {
                "text": "When sending an email",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which feature is similar to Dynamic ARP Inspection but for IPv6 networks?\n",
        "options": [
            {
                "text": "DHCP snooping",
                "correct": "0"
            },
            {
                "text": "VLAN tagging",
                "correct": "0"
            },
            {
                "text": "BPDU Guard",
                "correct": "0"
            },
            {
                "text": "Neighbor Discovery Inspection",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What does enabling Root Guard on ports not used as trunk lines accomplish?\n",
        "options": [
            {
                "text": "It increases the number of allowable VLANs on a port.",
                "correct": "0"
            },
            {
                "text": "It prevents unauthorized changes to the root bridge selection.",
                "correct": "1"
            },
            {
                "text": "It encrypts BPDU packets for secure transmission.",
                "correct": "0"
            },
            {
                "text": "It allows for faster convergence of the spanning tree.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Can port mirroring be configured to filter packets based on specific criteria?\n",
        "options": [
            {
                "text": "Yes, but only by MAC address.",
                "correct": "0"
            },
            {
                "text": "Yes, but only by IP address.",
                "correct": "0"
            },
            {
                "text": "No, port mirroring copies all traffic without filtering.",
                "correct": "0"
            },
            {
                "text": "Yes, packets can be filtered based on multiple criteria.",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which of the following can be a use case for the mirror port in port mirroring?\n",
        "options": [
            {
                "text": "Connecting another switch",
                "correct": "0"
            },
            {
                "text": "Serving as an additional port for network clients",
                "correct": "0"
            },
            {
                "text": "Acting as a monitoring point",
                "correct": "1"
            },
            {
                "text": "Providing power over Ethernet (PoE) to devices",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is an implicit deny in firewall configuration?\n",
        "options": [
            {
                "text": "A temporary rule that denies access during peak hours",
                "correct": "0"
            },
            {
                "text": "A default behavior to block traffic that does not match any rule",
                "correct": "1"
            },
            {
                "text": "A rule that explicitly allows all traffic",
                "correct": "0"
            },
            {
                "text": "A rule that only denies traffic from specific countries",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "How are the rules in a firewall's ACL processed?\n",
        "options": [
            {
                "text": "From bottom to top",
                "correct": "0"
            },
            {
                "text": "Simultaneously",
                "correct": "0"
            },
            {
                "text": "From top to bottom",
                "correct": "1"
            },
            {
                "text": "Randomly",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is a transparent proxy also known as?\n",
        "options": [
            {
                "text": "Secure proxy",
                "correct": "0"
            },
            {
                "text": "Direct proxy",
                "correct": "0"
            },
            {
                "text": "Forced proxy",
                "correct": "1"
            },
            {
                "text": "Private proxy",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is a forward proxy primarily used for?\n",
        "options": [
            {
                "text": "Data storage",
                "correct": "0"
            },
            {
                "text": "Outbound traffic management",
                "correct": "1"
            },
            {
                "text": "Inbound traffic management",
                "correct": "0"
            },
            {
                "text": "Data encryption only",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is a reverse proxy used for?\n",
        "options": [
            {
                "text": "Storing data permanently",
                "correct": "0"
            },
            {
                "text": "Directly connecting clients to the Internet",
                "correct": "0"
            },
            {
                "text": "Managing outbound traffic",
                "correct": "0"
            },
            {
                "text": "Managing inbound traffic",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the function of a content filtering firewall or proxy?\n",
        "options": [
            {
                "text": "To provide a VPN service",
                "correct": "0"
            },
            {
                "text": "To serve as a backup data center",
                "correct": "0"
            },
            {
                "text": "To restrict access",
                "correct": "1"
            },
            {
                "text": "To increase bandwidth",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the primary purpose of content filtering in an organization's network?\n",
        "options": [
            {
                "text": "To monitor employee productivity",
                "correct": "0"
            },
            {
                "text": "To encrypt network traffic",
                "correct": "0"
            },
            {
                "text": "To block access to malicious websites",
                "correct": "1"
            },
            {
                "text": "To increase network speed",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the role of regular expression pattern matching in URL filtering?\n",
        "options": [
            {
                "text": "To filter by keywords",
                "correct": "1"
            },
            {
                "text": "To encrypt the URL",
                "correct": "0"
            },
            {
                "text": "To identify the user's location",
                "correct": "0"
            },
            {
                "text": "To increase the speed of filtering",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What might a firewall be incorrectly doing if an application fails to function correctly?\n",
        "options": [
            {
                "text": "Decrypting all incoming traffic",
                "correct": "0"
            },
            {
                "text": "Blocking TCP or UDP ports that should be open",
                "correct": "1"
            },
            {
                "text": "Allowing all TCP and UDP ports",
                "correct": "0"
            },
            {
                "text": "Increasing bandwidth for all applications",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is a potential diagnostic step for a host-based firewall issue?\n",
        "options": [
            {
                "text": "Upgrading the firewall's firmware",
                "correct": "0"
            },
            {
                "text": "Encrypting all outgoing traffic",
                "correct": "0"
            },
            {
                "text": "Increasing the firewall's memory allocation",
                "correct": "0"
            },
            {
                "text": "Attempting a connection with the host firewall disabled",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which security device is typically used to enforce rules between network zones?\n",
        "options": [
            {
                "text": "Switch",
                "correct": "0"
            },
            {
                "text": "Firewall",
                "correct": "1"
            },
            {
                "text": "Router",
                "correct": "0"
            },
            {
                "text": "Access Point",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which of the following network security zones is subject to strict hardening and configuration management policies, and where hosts, user accounts, and traffic are continually monitored to ensure compliance with security policies?\n",
        "options": [
            {
                "text": "Public server network",
                "correct": "0"
            },
            {
                "text": "Private server administrative networks",
                "correct": "1"
            },
            {
                "text": "Private client network",
                "correct": "0"
            },
            {
                "text": "Guest",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the role of VLANs in network segmentation?\n",
        "options": [
            {
                "text": "To enforce security policies at the application layer",
                "correct": "0"
            },
            {
                "text": "To create separate broadcast domains",
                "correct": "1"
            },
            {
                "text": "To provide wireless connectivity",
                "correct": "0"
            },
            {
                "text": "To increase the physical security of network devices",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which of the following servers should be placed in a perimeter network?\n",
        "options": [
            {
                "text": "Web servers providing public access services",
                "correct": "1"
            },
            {
                "text": "Database servers containing sensitive information",
                "correct": "0"
            },
            {
                "text": "File servers used exclusively by internal employees",
                "correct": "0"
            },
            {
                "text": "Internal email servers for employee communication",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the purpose of a choke point in a screened subnet configuration?\n",
        "options": [
            {
                "text": "To facilitate better access control and easier monitoring",
                "correct": "1"
            },
            {
                "text": "To allow unrestricted access between the perimeter network and the LAN",
                "correct": "0"
            },
            {
                "text": "To eliminate the need for internal firewalls",
                "correct": "0"
            },
            {
                "text": "To provide a direct connection to the Internet",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is a perimeter network also known as?\n",
        "options": [
            {
                "text": "A demilitarized zone (DMZ)",
                "correct": "1"
            },
            {
                "text": "A fully public network",
                "correct": "0"
            },
            {
                "text": "A neutral zone",
                "correct": "0"
            },
            {
                "text": "A triple homed network",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the role of the screening firewall in a screened subnet?\n",
        "options": [
            {
                "text": "To restrict traffic on the external/public interface",
                "correct": "1"
            },
            {
                "text": "To provide unrestricted access to the Internet",
                "correct": "0"
            },
            {
                "text": "To filter communications between hosts in the perimeter and the LAN",
                "correct": "0"
            },
            {
                "text": "To connect directly to the LAN",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which IDS traffic assessment indicates that the system identified harmless traffic as offensive and generated an alarm or stopped the traffic?\n",
        "options": [
            {
                "text": "False positive",
                "correct": "1"
            },
            {
                "text": "Negative",
                "correct": "0"
            },
            {
                "text": "False negative",
                "correct": "0"
            },
            {
                "text": "Positive",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "You're concerned about attacks directed at your network firewall. You want to be able to identify and be notified of any attacks.\nIn addition, you want the system to take immediate action to stop or prevent the attack, if possible.\nWhich tool should you use?\n",
        "options": [
            {
                "text": "IPS",
                "correct": "1"
            },
            {
                "text": "IDS",
                "correct": "0"
            },
            {
                "text": "Packet sniffer",
                "correct": "0"
            },
            {
                "text": "Port scanner",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which of the following best describes the role of a sniffer in an Intrusion Detection System (IDS)?\n",
        "options": [
            {
                "text": "It generates signature patterns for detecting malicious activity.",
                "correct": "0"
            },
            {
                "text": "It reads frames from a mirrored port to monitor network traffic.",
                "correct": "1"
            },
            {
                "text": "It serves as a firewall to block malicious traffic.",
                "correct": "0"
            },
            {
                "text": "It encrypts network traffic to prevent unauthorized access.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which of the following is a potential vulnerability of integrated peripherals in smart devices?\n",
        "options": [
            {
                "text": "Enhanced user experience",
                "correct": "0"
            },
            {
                "text": "Facilitation of surveillance",
                "correct": "1"
            },
            {
                "text": "Improved device performance",
                "correct": "0"
            },
            {
                "text": "Increased battery life",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What makes smart devices vulnerable to standard attacks?\n",
        "options": [
            {
                "text": "Their compute, storage, and network functions",
                "correct": "1"
            },
            {
                "text": "The lack of integrated peripherals",
                "correct": "0"
            },
            {
                "text": "The use of proprietary operating systems",
                "correct": "0"
            },
            {
                "text": "Their inability to connect to the Internet",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What characterizes a static computing environment?\n",
        "options": [
            {
                "text": "High levels of user customization and data file management",
                "correct": "0"
            },
            {
                "text": "Limited support for correcting security issues",
                "correct": "1"
            },
            {
                "text": "Frequent hardware and software changes",
                "correct": "0"
            },
            {
                "text": "The ability to install new operating systems",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is a \"data historian\" in the context of an ICS?\n",
        "options": [
            {
                "text": "A communication protocol for PLCs",
                "correct": "0"
            },
            {
                "text": "A database generated by the control loop",
                "correct": "1"
            },
            {
                "text": "A cybersecurity tool for industrial networks",
                "correct": "0"
            },
            {
                "text": "A backup server for industrial data",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What role does a Programmable Logic Controller (PLC) play in an ICS?\n",
        "options": [
            {
                "text": "It controls industrial machinery and processes.",
                "correct": "1"
            },
            {
                "text": "It serves as a data storage unit for industrial information.",
                "correct": "0"
            },
            {
                "text": "It provides internet access to industrial devices.",
                "correct": "0"
            },
            {
                "text": "It acts as a firewall for industrial devices.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is a significant advantage of Narrowband-IoT (NB-IoT) over regular cellular connectivity?\n",
        "options": [
            {
                "text": "Direct connection to the Internet without intermediaries",
                "correct": "0"
            },
            {
                "text": "Unlimited bandwidth usage",
                "correct": "0"
            },
            {
                "text": "Greater penetrating power",
                "correct": "1"
            },
            {
                "text": "Higher data rates",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What distinguishes an Operational Technology (OT) network from a standard IT data network?\n",
        "options": [
            {
                "text": "OT networks cannot use industrial Ethernet.",
                "correct": "0"
            },
            {
                "text": "OT networks use standard Ethernet only.",
                "correct": "0"
            },
            {
                "text": "OT networks are optimized for real-time transfers.",
                "correct": "1"
            },
            {
                "text": "OT networks are primarily used for gaming.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is a vulnerability in integrating ICS/SCADA systems with corporate data networks?\n",
        "options": [
            {
                "text": "Improved system interoperability",
                "correct": "0"
            },
            {
                "text": "Enhanced data flow and efficiency",
                "correct": "0"
            },
            {
                "text": "Vulnerable links that can be exploited",
                "correct": "1"
            },
            {
                "text": "Increased system redundancy",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What can mitigate the risks posed by IoT devices in remote working scenarios?\n",
        "options": [
            {
                "text": "Avoiding the use of Wi-Fi networks",
                "correct": "0"
            },
            {
                "text": "Regular audits and employee security awareness training",
                "correct": "1"
            },
            {
                "text": "Decreasing the number of devices connected to the home network",
                "correct": "0"
            },
            {
                "text": "Using older, more familiar technology",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What distinguishes smart building technology from consumer-grade IoT devices in terms of security?\n",
        "options": [
            {
                "text": "Smart building technology cannot be updated.",
                "correct": "0"
            },
            {
                "text": "Smart building technology has less scope for compromise.",
                "correct": "1"
            },
            {
                "text": "Smart building technology uses Bluetooth exclusively.",
                "correct": "0"
            },
            {
                "text": "Smart building technology is more prone to compromise.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is a badge reader used for in building security?\n",
        "options": [
            {
                "text": "To detect motion at entry points",
                "correct": "0"
            },
            {
                "text": "To provide lighting at entry points",
                "correct": "0"
            },
            {
                "text": "To record the time employees leave the building",
                "correct": "0"
            },
            {
                "text": "To authenticate users quickly at access points",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "How is a user's biometric data used in a biometric lock system?\n",
        "options": [
            {
                "text": "It is sent to a remote server for storage.",
                "correct": "0"
            },
            {
                "text": "It is recorded and stored on an authentication server.",
                "correct": "1"
            },
            {
                "text": "It is deleted immediately after each use for privacy reasons.",
                "correct": "0"
            },
            {
                "text": "It is stored on the user's badge.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Due to an increase in foot traffic from outside groups throughout the building, the organization asks\ntheir security office to employ equipment that will allow visual monitoring across the organization.\nWhat equipment would best be suited to manage this request?\n",
        "options": [
            {
                "text": "Cameras",
                "correct": "1"
            },
            {
                "text": "Asset Tag",
                "correct": "0"
            },
            {
                "text": "Circuit",
                "correct": "0"
            },
            {
                "text": "Motion Detection",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What feature allows a security camera to survey a large room and pick out individual faces?\n",
        "options": [
            {
                "text": "Narrow focal length",
                "correct": "0"
            },
            {
                "text": "Fixed positioning",
                "correct": "0"
            },
            {
                "text": "Pan-Tilt-Zoom (PTZ) controls",
                "correct": "1"
            },
            {
                "text": "Coaxial cabling",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What can an organization use geofencing for?\n",
        "options": [
            {
                "text": "To increase the speed of their internet connection",
                "correct": "0"
            },
            {
                "text": "To monitor the productivity of their employees",
                "correct": "0"
            },
            {
                "text": "To improve the accuracy of their GPS systems",
                "correct": "0"
            },
            {
                "text": "To control the use of camera functions on devices",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the primary purpose of the IEEE 802.11 standards?\n",
        "options": [
            {
                "text": "To establish security standards for the Internet",
                "correct": "0"
            },
            {
                "text": "To define the protocols for wired networking",
                "correct": "0"
            },
            {
                "text": "To define the physical layer media for wireless LANs",
                "correct": "1"
            },
            {
                "text": "To regulate the manufacturing of wireless devices",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the function of the Request to Send (RTS) and Clear To Send (CTS) mechanism in IEEE 802.11 networks?\n",
        "options": [
            {
                "text": "To further reduce the incidence of collisions",
                "correct": "1"
            },
            {
                "text": "To increase the transmission speed",
                "correct": "0"
            },
            {
                "text": "To assign IP addresses to devices",
                "correct": "0"
            },
            {
                "text": "To encrypt data transmissions",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "You are a network administrator tasked with setting up a Wi-Fi network in a large office building.\nThe building has multiple floors with thick concrete walls and several electronic devices that could cause interference.\nYour primary goal is to ensure high data rates and minimal interference for the office's Wi-Fi network.\nGiven this scenario, which frequency band and configuration would be the most appropriate for your Wi-Fi network?\n",
        "options": [
            {
                "text": "Use the 2.4 GHz band because it is less congested and supports more individual channels.",
                "correct": "0"
            },
            {
                "text": "Use the 5 GHz band but limit the power output to comply with regulatory constraints.",
                "correct": "0"
            },
            {
                "text": "Use the 5 GHz band because it supports higher data rates and has more individual channels.",
                "correct": "1"
            },
            {
                "text": "Use the 2.4 GHz band because it has better penetration through solid surfaces.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What additional feature does the IEEE 802.11h standard introduce to the 5 GHz band?\n",
        "options": [
            {
                "text": "Enhanced encryption",
                "correct": "0"
            },
            {
                "text": "Increased data rates",
                "correct": "0"
            },
            {
                "text": "Dynamic Frequency Selection (DFS)",
                "correct": "1"
            },
            {
                "text": "Reduced channel width",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "How many non-overlapping channels are recommended in the 2.4 GHz band for IEEE 802.11b to avoid co-channel interference?\n",
        "options": [
            {
                "text": "14",
                "correct": "0"
            },
            {
                "text": "11",
                "correct": "0"
            },
            {
                "text": "3",
                "correct": "1"
            },
            {
                "text": "13",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What does channel bonding achieve in the context of IEEE 802.11n?\n",
        "options": [
            {
                "text": "It decreases the data rate.",
                "correct": "0"
            },
            {
                "text": "It reduces the frequency range.",
                "correct": "0"
            },
            {
                "text": "It limits the use of multiple antennas.",
                "correct": "0"
            },
            {
                "text": "It combines two 20 MHz channels into a single 40 MHz channel.",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the effect of operating in High Throughput (HT)/greenfield mode?\n",
        "options": [
            {
                "text": "It maximizes performance.",
                "correct": "1"
            },
            {
                "text": "It reduces overall WLAN performance.",
                "correct": "0"
            },
            {
                "text": "It increases compatibility with older standards.",
                "correct": "0"
            },
            {
                "text": "It increases the number of available channels.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the primary aim of Wi-Fi 6 (802.11ax)?\n",
        "options": [
            {
                "text": "To support only the 2.4 GHz band",
                "correct": "0"
            },
            {
                "text": "To double the speed of Wi-Fi 5",
                "correct": "0"
            },
            {
                "text": "To approximate 10G connection speeds",
                "correct": "1"
            },
            {
                "text": "To eliminate the need for Wi-Fi passwords",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the primary purpose of using Resource Units (RUs) in Wi-Fi 6?\n",
        "options": [
            {
                "text": "To encrypt data packets for security",
                "correct": "0"
            },
            {
                "text": "To increase the Wi-Fi signal range",
                "correct": "0"
            },
            {
                "text": "To allocate bandwidth more efficiently",
                "correct": "1"
            },
            {
                "text": "To reduce the frequency of signal interference",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "In which Wi-Fi standard was Downlink MU-MIMO (DL MU-MIMO) first introduced?\n",
        "options": [
            {
                "text": "Wi-Fi 6 (802.11ax)",
                "correct": "0"
            },
            {
                "text": "Wi-Fi 6E",
                "correct": "0"
            },
            {
                "text": "Wi-Fi 4 (802.11n)",
                "correct": "0"
            },
            {
                "text": "Wi-Fi 5 (802.11ac)",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is a key difference between Wi-Fi 5 and Wi-Fi 6 regarding MU-MIMO?\n",
        "options": [
            {
                "text": "Wi-Fi 5 supports UL MU-MIMO, while Wi-Fi 6 does not.",
                "correct": "0"
            },
            {
                "text": "Wi-Fi 5 exclusively uses the 6 GHz band for MU-MIMO.",
                "correct": "0"
            },
            {
                "text": "Wi-Fi 6 does not support downlink MU-MIMO.",
                "correct": "0"
            },
            {
                "text": "Wi-Fi 6 supports up to eight stations in parallel, while Wi-Fi 5 supports up to four.",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which of the following is a requirement for 4G and 5G devices to connect to the network?\n",
        "options": [
            {
                "text": "A Bluetooth connection",
                "correct": "0"
            },
            {
                "text": "An Ethernet cable",
                "correct": "0"
            },
            {
                "text": "A Wi-Fi password",
                "correct": "0"
            },
            {
                "text": "A SIM card or chip",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the effective range of a cellular base station?\n",
        "options": [
            {
                "text": "Up to 5 miles (8 km)",
                "correct": "1"
            },
            {
                "text": "Up to 2 miles (3.2 km)",
                "correct": "0"
            },
            {
                "text": "Up to 1 mile (1.6 km)",
                "correct": "0"
            },
            {
                "text": "Up to 10 miles (16 km)",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which of the following is a drawback of using an array of satellites positioned in low Earth orbit (LEO) for Internet access?\n",
        "options": [
            {
                "text": "The satellites do not move relative to the surface of the Earth.",
                "correct": "0"
            },
            {
                "text": "The technology offers higher latency than geostationary satellites.",
                "correct": "0"
            },
            {
                "text": "The customer's premises antenna must periodically realign with the array.",
                "correct": "1"
            },
            {
                "text": "The satellites provide unlimited bandwidth.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What technology is used to connect the customer's premises to the satellite Internet service?\n",
        "options": [
            {
                "text": "Ethernet cable",
                "correct": "0"
            },
            {
                "text": "VSAT satellite dish antenna",
                "correct": "1"
            },
            {
                "text": "High-frequency radio waves",
                "correct": "0"
            },
            {
                "text": "Fiber-optic cable",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which network type is most commonly used in Wi-Fi setups?\n",
        "options": [
            {
                "text": "Mesh network",
                "correct": "0"
            },
            {
                "text": "Peer-to-peer network",
                "correct": "0"
            },
            {
                "text": "Ad-hoc network",
                "correct": "0"
            },
            {
                "text": "Infrastructure network",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "You have decided to conduct a business meeting at a local coffee shop. The coffee shop you chose has a wireless hotspot\nfor customers who want internet access.\nYou decide to check your email before the meeting begins. When you open the browser, you cannot gain internet access.\nOther customers are using the Internet without problems. You're sure that your laptop's wireless adapter works\nbecause you use a wireless connection at work.\nWhat is the MOST likely cause of the problem?\n",
        "options": [
            {
                "text": "A mismatched SSID",
                "correct": "1"
            },
            {
                "text": "Different LAN protocols",
                "correct": "0"
            },
            {
                "text": "Incorrectly configured PPP",
                "correct": "0"
            },
            {
                "text": "An out-of-range WAP",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "How can multiple APs connected to the same distribution system be described?\n",
        "options": [
            {
                "text": "As an Extended Service Set (ESS)",
                "correct": "1"
            },
            {
                "text": "As an Ad-hoc Network",
                "correct": "0"
            },
            {
                "text": "As a Mesh Network",
                "correct": "0"
            },
            {
                "text": "As a Peer-to-Peer Network",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What mechanism do stations use to determine an appropriate data rate based on signal quality?\n",
        "options": [
            {
                "text": "Adaptive Frequency Selection",
                "correct": "0"
            },
            {
                "text": "Dynamic Rate Switching/Selection (DRS)",
                "correct": "1"
            },
            {
                "text": "Signal Quality Assessment",
                "correct": "0"
            },
            {
                "text": "Fixed Rate Selection",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which of the following best represents a good signal strength?\n",
        "options": [
            {
                "text": "-50 dBm",
                "correct": "0"
            },
            {
                "text": "-80 dBm",
                "correct": "0"
            },
            {
                "text": "-30 dBm",
                "correct": "0"
            },
            {
                "text": "-65 dBm",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the purpose of creating a new plan with marked basic service areas and associated APs during a wireless survey?\n",
        "options": [
            {
                "text": "To avoid \"dead zones\" and ensure adequate coverage",
                "correct": "1"
            },
            {
                "text": "To ensure a visually appealing layout",
                "correct": "0"
            },
            {
                "text": "To minimize the cost of equipment",
                "correct": "0"
            },
            {
                "text": "To facilitate easy maintenance",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is a heat map in the context of a wireless survey?\n",
        "options": [
            {
                "text": "A graphical representation of temperature variations in the area",
                "correct": "0"
            },
            {
                "text": "A map showing the locations of heating vents in relation to APs",
                "correct": "0"
            },
            {
                "text": "A security tool to detect unauthorized access",
                "correct": "0"
            },
            {
                "text": "A graphical representation of signal strength across an area",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the role of a beacon frame in a WLAN?\n",
        "options": [
            {
                "text": "To directly connect client devices to the Internet",
                "correct": "0"
            },
            {
                "text": "To encrypt data transmissions between the AP and client devices",
                "correct": "0"
            },
            {
                "text": "To advertise the WLAN",
                "correct": "1"
            },
            {
                "text": "To suppress the SSID broadcast",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the effect of suppressing SSID broadcast in a WLAN?\n",
        "options": [
            {
                "text": "It requires users to manually configure the network connection.",
                "correct": "1"
            },
            {
                "text": "It automatically encrypts all data transmissions.",
                "correct": "0"
            },
            {
                "text": "It makes the network invisible to all client devices.",
                "correct": "0"
            },
            {
                "text": "It increases the beacon frame broadcast interval.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which protocol is typically used by Cisco wireless controllers to communicate with access points?\n",
        "options": [
            {
                "text": "SNMP",
                "correct": "0"
            },
            {
                "text": "FTP",
                "correct": "0"
            },
            {
                "text": "LWAPP",
                "correct": "1"
            },
            {
                "text": "HTTP",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What advantage does automated VLAN pooling provide in a wireless network?\n",
        "options": [
            {
                "text": "Reduces the cost of deploying access points",
                "correct": "0"
            },
            {
                "text": "Enhances the physical security of the network infrastructure",
                "correct": "0"
            },
            {
                "text": "Reduces excessive broadcast traffic",
                "correct": "1"
            },
            {
                "text": "Increases the signal strength of access points",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What does the beamwidth of an antenna indicate?\n",
        "options": [
            {
                "text": "The power of the transmitted signal",
                "correct": "0"
            },
            {
                "text": "The frequency of the transmitted signal",
                "correct": "0"
            },
            {
                "text": "The amount of electrical resistance",
                "correct": "0"
            },
            {
                "text": "The amount of directionality",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "Why should access points with omnidirectional antennas ideally be ceiling-mounted?\n",
        "options": [
            {
                "text": "To reduce signal strength",
                "correct": "0"
            },
            {
                "text": "To focus the signal in a single direction",
                "correct": "0"
            },
            {
                "text": "To increase the frequency of the radio waves",
                "correct": "0"
            },
            {
                "text": "To minimize interference from furniture",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the primary purpose of a wireless point-to-point link?\n",
        "options": [
            {
                "text": "To create a scalable network for large enterprise implementations",
                "correct": "0"
            },
            {
                "text": "To replace all wired connections in an office environment",
                "correct": "0"
            },
            {
                "text": "To connect multiple devices in a network without using cables",
                "correct": "0"
            },
            {
                "text": "To establish a logical and physical connection between two devices",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the role of Wi-Fi Direct in wireless networking?\n",
        "options": [
            {
                "text": "To replace the need for wired connections in all types of network topologies",
                "correct": "0"
            },
            {
                "text": "To provide a scalable solution for large enterprise networks",
                "correct": "0"
            },
            {
                "text": "To enable devices to connect to the Internet without a wireless adapter",
                "correct": "0"
            },
            {
                "text": "To allow devices to operate a limited type of access point for direct connections",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which of the following attacks aim to recover the encryption key in WEP and original WPA versions?\n",
        "options": [
            {
                "text": "Phishing attacks",
                "correct": "0"
            },
            {
                "text": "Replay attacks",
                "correct": "1"
            },
            {
                "text": "Cross-site scripting attacks",
                "correct": "0"
            },
            {
                "text": "SQL injection attacks",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What protocol does WPA introduce to mitigate attacks against WEP?\n",
        "options": [
            {
                "text": "TKIP",
                "correct": "1"
            },
            {
                "text": "GCMP",
                "correct": "0"
            },
            {
                "text": "CCMP",
                "correct": "0"
            },
            {
                "text": "AES",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "In WPA2, what is generated using the passphrase in PSK authentication?\n",
        "options": [
            {
                "text": "Password Authenticated Key Exchange (PAKE)",
                "correct": "0"
            },
            {
                "text": "Pairwise master key (PMK)",
                "correct": "1"
            },
            {
                "text": "SAE protocol",
                "correct": "0"
            },
            {
                "text": "4-way handshake",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What role does the access point (AP) play in enterprise authentication?\n",
        "options": [
            {
                "text": "It directly authenticates user credentials.",
                "correct": "0"
            },
            {
                "text": "It forwards authentication data to an AAA server.",
                "correct": "1"
            },
            {
                "text": "It generates the master key (MK).",
                "correct": "0"
            },
            {
                "text": "It serves as the authentication server.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which methods are used to derive session keys in an enterprise authentication setup? (Select Two)\n",
        "options": [
            {
                "text": "SNMP community strings",
                "correct": "0"
            },
            {
                "text": "DHCP lease negotiation",
                "correct": "0"
            },
            {
                "text": "WPA3 SAE methods",
                "correct": "1"
            },
            {
                "text": "IEEE 802.11ac beamforming",
                "correct": "0"
            },
            {
                "text": "WPA2 four-way handshake",
                "correct": "1"
            }
        ],
        "type": "multi"
    },
    {
        "text": "What is the purpose of using a VPN with an open Wi-Fi network?\n",
        "options": [
            {
                "text": "To create an encrypted tunnel for secure communication",
                "correct": "1"
            },
            {
                "text": "To allow unrestricted access to all network resources",
                "correct": "0"
            },
            {
                "text": "To decrease the network's bandwidth usage",
                "correct": "0"
            },
            {
                "text": "To bypass the need for a captive portal",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What mechanism does WPA3 use to encrypt open authentication traffic?\n",
        "options": [
            {
                "text": "WPA2 Encryption",
                "correct": "0"
            },
            {
                "text": "Wi-Fi Enhanced Open",
                "correct": "1"
            },
            {
                "text": "TLS Encryption",
                "correct": "0"
            },
            {
                "text": "VPN Tunneling",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is an enterprise mobility management (EMM) suite primarily used for in a BYOD environment?\n",
        "options": [
            {
                "text": "To enforce security policies on connected devices",
                "correct": "1"
            },
            {
                "text": "To restrict personal use of corporate devices",
                "correct": "0"
            },
            {
                "text": "To increase the variety of devices used in the corporate environment",
                "correct": "0"
            },
            {
                "text": "To prohibit the use of personal devices in the workplace",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is one solution to mitigate the risk of rogue access points?\n",
        "options": [
            {
                "text": "Decreasing the signal strength of the legitimate access points",
                "correct": "0"
            },
            {
                "text": "Using EAP-TLS security for mutual authentication",
                "correct": "1"
            },
            {
                "text": "Disabling the network's SSID broadcast",
                "correct": "0"
            },
            {
                "text": "Increasing the network's bandwidth",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which of the following BEST describes the method an attacker might use to make an evil twin access point more appealing to unsuspecting users?\n",
        "options": [
            {
                "text": "Encrypting the connection to the evil twin access point with an outdated encryption method",
                "correct": "0"
            },
            {
                "text": "Decreasing the signal strength of the evil twin access point",
                "correct": "0"
            },
            {
                "text": "Naming the evil twin access point with a completely unrelated SSID",
                "correct": "0"
            },
            {
                "text": "Configuring the evil twin access point with a similar or identical SSID to a legitimate access point",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the inverse-square rule in the context of wireless signals?\n",
        "options": [
            {
                "text": "Doubling the distance between devices quadruples the signal strength",
                "correct": "0"
            },
            {
                "text": "Doubling the distance between devices doubles the signal strength",
                "correct": "0"
            },
            {
                "text": "Doubling the distance between devices reduces the signal strength by a factor of four",
                "correct": "1"
            },
            {
                "text": "Doubling the distance between devices halves the signal strength",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What can cause a loss of power/signal strength in a wireless network?\n",
        "options": [
            {
                "text": "Using a Wi-Fi analyzer",
                "correct": "0"
            },
            {
                "text": "Free space path loss and interference",
                "correct": "1"
            },
            {
                "text": "Decreasing the distance between devices",
                "correct": "0"
            },
            {
                "text": "Upgrading network hardware",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is throughput in the context of wireless networks?\n",
        "options": [
            {
                "text": "The amount of data transferred at the network layer",
                "correct": "1"
            },
            {
                "text": "The maximum data rate supported by the network standard",
                "correct": "0"
            },
            {
                "text": "The latency of the network",
                "correct": "0"
            },
            {
                "text": "The speed of the network's encryption algorithm",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the recommended AP power setting relative to the weakest client power?\n",
        "options": [
            {
                "text": "Twice the weakest client power",
                "correct": "0"
            },
            {
                "text": "Equal to the weakest client power",
                "correct": "0"
            },
            {
                "text": "Half of the weakest client power",
                "correct": "0"
            },
            {
                "text": "2/3rds of the weakest client power",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is antenna cable attenuation?\n",
        "options": [
            {
                "text": "The increase in Wi-Fi signal due to better antenna placement",
                "correct": "0"
            },
            {
                "text": "The process of adding more access points to a network",
                "correct": "0"
            },
            {
                "text": "The loss of signal strength along a coax cable",
                "correct": "1"
            },
            {
                "text": "The strengthening of a signal over a coax cable",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Why is it important to consider the band (2.4 GHz or 5 GHz) that client devices support when addressing wireless coverage issues?\n",
        "options": [
            {
                "text": "2.4 GHz signals cannot penetrate walls or other physical barriers.",
                "correct": "0"
            },
            {
                "text": "The band determines the maximum speed of the internet connection.",
                "correct": "0"
            },
            {
                "text": "5 GHz devices consume more power, leading to higher electricity costs.",
                "correct": "0"
            },
            {
                "text": "Client devices that only support 2.4 GHz cannot connect to a 5 GHz network.",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "In a complex environment, why might it be necessary to adjust the power level used by an access point on a given channel? (Select two.)\n",
        "options": [
            {
                "text": "To increase the number of devices that can connect to the access point",
                "correct": "0"
            },
            {
                "text": "To ensure the access point can interfere with other cells",
                "correct": "0"
            },
            {
                "text": "To prevent the access point from interfering with other cells",
                "correct": "1"
            },
            {
                "text": "To decrease the security level of the network",
                "correct": "0"
            },
            {
                "text": "To ensure clients can communicate effectively",
                "correct": "1"
            }
        ],
        "type": "multi"
    },
    {
        "text": "What type of interference occurs when access points are configured to use overlapping channels, such as channels 1 and 3 in the 2.4 GHz band?\n",
        "options": [
            {
                "text": "Frequency modulation interference",
                "correct": "0"
            },
            {
                "text": "Adjacent channel interference",
                "correct": "1"
            },
            {
                "text": "Co-channel interference",
                "correct": "0"
            },
            {
                "text": "Direct sequence interference",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Aside from interference, what could signal problems also be a result of?\n",
        "options": [
            {
                "text": "A malfunctioning Wi-Fi adapter in the client device",
                "correct": "0"
            },
            {
                "text": "Excessive bandwidth usage by a single device",
                "correct": "0"
            },
            {
                "text": "The use of outdated encryption protocols",
                "correct": "0"
            },
            {
                "text": "An attack on the network by making clients connect to a rogue AP",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is Electromagnetic Interference (EMI) and how can it be detected?\n",
        "options": [
            {
                "text": "EMI is interference from a powerful source in the same frequency band.",
                "correct": "1"
            },
            {
                "text": "EMI is a type of signal boost provided by certain appliances, detectable through standard Wi-Fi analysis.",
                "correct": "0"
            },
            {
                "text": "EMI is an enhancement of the Wi-Fi signal that can be detected with a Wi-Fi adapter.",
                "correct": "0"
            },
            {
                "text": "EMI is interference from devices working in different frequency bands and can be ignored.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the primary purpose of analyzing access point association times for client devices?\n",
        "options": [
            {
                "text": "To calculate the total data usage of each client",
                "correct": "0"
            },
            {
                "text": "To identify issues with roaming",
                "correct": "1"
            },
            {
                "text": "To assess the security level of the wireless network",
                "correct": "0"
            },
            {
                "text": "To determine the optimal placement for new access points",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is a legitimate reason for a client to disassociate but not deauthenticate from an AP?\n",
        "options": [
            {
                "text": "The client is shutting down.",
                "correct": "0"
            },
            {
                "text": "The client is updating its firmware.",
                "correct": "0"
            },
            {
                "text": "The client is roaming in an extended service area.",
                "correct": "1"
            },
            {
                "text": "The client is performing a security scan.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What might unexpected client disassociations indicate if there is no roaming, interference, or standards support issue?\n",
        "options": [
            {
                "text": "A potential malicious attack",
                "correct": "1"
            },
            {
                "text": "A need for a firmware update",
                "correct": "0"
            },
            {
                "text": "A signal to upgrade the network equipment",
                "correct": "0"
            },
            {
                "text": "A sign of excessive network traffic",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What role does a controller play in managing overcapacity in an enterprise Wi-Fi solution?\n",
        "options": [
            {
                "text": "It assigns static IP addresses to all clients to manage connections better.",
                "correct": "0"
            },
            {
                "text": "It physically cools down the APs to prevent overheating.",
                "correct": "0"
            },
            {
                "text": "It provides reporting tools to diagnose bandwidth issues.",
                "correct": "1"
            },
            {
                "text": "It increases the Wi-Fi signal strength automatically.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is a common method to dynamically manage network load and reduce overutilization in a wireless network facing overcapacity issues?\n",
        "options": [
            {
                "text": "Deploying additional DHCP servers",
                "correct": "0"
            },
            {
                "text": "Increasing the AP's transmit power",
                "correct": "0"
            },
            {
                "text": "Reducing the encryption level of the network",
                "correct": "0"
            },
            {
                "text": "Reassigning wireless channels dynamically",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the function of a Customer Edge (CE) router in a WAN?\n",
        "options": [
            {
                "text": "To modulate and demodulate signals",
                "correct": "0"
            },
            {
                "text": "To increase the bandwidth of the WAN",
                "correct": "0"
            },
            {
                "text": "To connect the customer's network to the provider's network",
                "correct": "1"
            },
            {
                "text": "To provide firewall services exclusively",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the function of a Customer Edge (CE) router in a WAN?\n",
        "options": [
            {
                "text": "To modulate and demodulate signals",
                "correct": "0"
            },
            {
                "text": "To increase the bandwidth of the WAN",
                "correct": "0"
            },
            {
                "text": "To connect the customer's network to the provider's network",
                "correct": "1"
            },
            {
                "text": "To provide firewall services exclusively",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "At which layer of the OSI model do WANs often use simpler protocols compared to LANs?\n",
        "options": [
            {
                "text": "Network layer",
                "correct": "0"
            },
            {
                "text": "Transport layer",
                "correct": "0"
            },
            {
                "text": "Data Link layer",
                "correct": "1"
            },
            {
                "text": "Physical layer",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Why do organizations often choose to use public networks for their WAN services?\n",
        "options": [
            {
                "text": "Because public networks are faster than private networks",
                "correct": "0"
            },
            {
                "text": "Because public networks offer the highest security",
                "correct": "0"
            },
            {
                "text": "Because the cost is far less than implementing a private solution",
                "correct": "1"
            },
            {
                "text": "Because public networks do not require any infrastructure",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What role does a Cable Modem Termination System (CMTS) play in a cable internet setup?\n",
        "options": [
            {
                "text": "It serves as a backup connection point.",
                "correct": "0"
            },
            {
                "text": "It encrypts data transmissions.",
                "correct": "0"
            },
            {
                "text": "It converts analog signals to digital.",
                "correct": "0"
            },
            {
                "text": "It routes data traffic via the fiber backbone.",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the purpose of a filter (splitter) in a DSL setup?\n",
        "options": [
            {
                "text": "To prevent noise from affecting voice calls",
                "correct": "1"
            },
            {
                "text": "To serve as a backup connection point",
                "correct": "0"
            },
            {
                "text": "To increase internet speed",
                "correct": "0"
            },
            {
                "text": "To convert digital signals to analog",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the primary function of a T-carrier system?\n",
        "options": [
            {
                "text": "To serve as a backup system for internet connections",
                "correct": "0"
            },
            {
                "text": "To encrypt data transmissions",
                "correct": "0"
            },
            {
                "text": "To enable voice traffic digitization",
                "correct": "1"
            },
            {
                "text": "To provide wireless connectivity",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the primary advantage of using Time Division Multiplexing (TDM) in T-carrier systems?\n",
        "options": [
            {
                "text": "It reduces the cost of internet services.",
                "correct": "0"
            },
            {
                "text": "It encrypts data for secure transmission.",
                "correct": "0"
            },
            {
                "text": "It enables the simultaneous transmission of multiple signals over a single transmission path.",
                "correct": "1"
            },
            {
                "text": "It converts analog signals to digital signals.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "How is the ONT connected to the customer's router in FTTP?\n",
        "options": [
            {
                "text": "Using a USB cable",
                "correct": "0"
            },
            {
                "text": "Using a coaxial cable",
                "correct": "0"
            },
            {
                "text": "Using a fiber optic cable",
                "correct": "0"
            },
            {
                "text": "Using an RJ45 Ethernet patch cord",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the very short range rate of VDSL2?\n",
        "options": [
            {
                "text": "52 Mbps upstream only",
                "correct": "0"
            },
            {
                "text": "50 Mbps bi-directional",
                "correct": "0"
            },
            {
                "text": "100 Mbps bi-directional",
                "correct": "1"
            },
            {
                "text": "100 Mbps downstream only",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What technology do service providers use to support FTTC?\n",
        "options": [
            {
                "text": "ADSL",
                "correct": "0"
            },
            {
                "text": "WiMAX",
                "correct": "0"
            },
            {
                "text": "VDSL",
                "correct": "1"
            },
            {
                "text": "LTE",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "You often travel away from the office. While traveling, you would like to use a modem on\nyour laptop computer to connect directly to a server in your office to access needed files.\nYou want the connection to be as secure as possible. Which type of connection do you need?\n",
        "options": [
            {
                "text": "Virtual private network",
                "correct": "0"
            },
            {
                "text": "Remote access",
                "correct": "1"
            },
            {
                "text": "Intranet",
                "correct": "0"
            },
            {
                "text": "Internet",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What makes TACACS+ different from RADIUS?\n",
        "options": [
            {
                "text": "TACACS+ is less secure than RADIUS.",
                "correct": "0"
            },
            {
                "text": "TACACS+ separates AAA functions.",
                "correct": "1"
            },
            {
                "text": "TACACS+ uses UDP for communication.",
                "correct": "0"
            },
            {
                "text": "TACACS+ combines AAA in a single process.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is a common implementation of remote network access today?\n",
        "options": [
            {
                "text": "Virtual Private Network (VPN)",
                "correct": "1"
            },
            {
                "text": "Direct cabled connections",
                "correct": "0"
            },
            {
                "text": "Physical token exchange",
                "correct": "0"
            },
            {
                "text": "Analog modems",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which protocol is known for operating at the Network layer of the OSI model to authenticate hosts and encrypt packets?\n",
        "options": [
            {
                "text": "IPSec",
                "correct": "1"
            },
            {
                "text": "PPP",
                "correct": "0"
            },
            {
                "text": "TLS",
                "correct": "0"
            },
            {
                "text": "GRE",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which protocol is often used with other protocols to provision a secure tunnel due to its lack of inherent security mechanisms?\n",
        "options": [
            {
                "text": "IPSec",
                "correct": "0"
            },
            {
                "text": "TLS",
                "correct": "0"
            },
            {
                "text": "GRE",
                "correct": "0"
            },
            {
                "text": "PPP",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What does the Encapsulating Security Payload (ESP) protocol provide?\n",
        "options": [
            {
                "text": "Encryption of the payload only",
                "correct": "0"
            },
            {
                "text": "Encryption of the payload and optional authentication",
                "correct": "1"
            },
            {
                "text": "Encryption of the whole packet",
                "correct": "0"
            },
            {
                "text": "Encryption of the IP header only",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "In the context of IPSec and IPv6, how are additional security features implemented within the packet structure?\n",
        "options": [
            {
                "text": "By modifying the payload data",
                "correct": "0"
            },
            {
                "text": "Via the primary IPv6 header",
                "correct": "0"
            },
            {
                "text": "Through the use of extension headers",
                "correct": "1"
            },
            {
                "text": "With a special encryption algorithm",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which mode of IPSec is used for communications between VPN gateways across an unsecure network?\n",
        "options": [
            {
                "text": "Tunnel mode",
                "correct": "1"
            },
            {
                "text": "Gateway mode",
                "correct": "0"
            },
            {
                "text": "VPN mode",
                "correct": "0"
            },
            {
                "text": "Transport mode",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which feature of IKEv2 facilitates the use of a VPN through a home router/firewall?\n",
        "options": [
            {
                "text": "EAP authentication methods",
                "correct": "0"
            },
            {
                "text": "NAT traversal",
                "correct": "1"
            },
            {
                "text": "MOBIKE multihoming",
                "correct": "0"
            },
            {
                "text": "Simple setup mode",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "During which phase of IKE negotiations is the identity of the two peers established?\n",
        "options": [
            {
                "text": "Phase II",
                "correct": "0"
            },
            {
                "text": "Phase III",
                "correct": "0"
            },
            {
                "text": "Phase I",
                "correct": "1"
            },
            {
                "text": "Phase IV",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What does a full tunnel VPN configuration do?\n",
        "options": [
            {
                "text": "Requires no client software to operate",
                "correct": "0"
            },
            {
                "text": "Mediates internet access through the corporate network",
                "correct": "1"
            },
            {
                "text": "Allows the client to bypass corporate network security",
                "correct": "0"
            },
            {
                "text": "Directly connects the client to the Internet using ISP-managed configurations",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which protocol is used in conjunction with IPSec to provide added security?\n",
        "options": [
            {
                "text": "SSTP",
                "correct": "0"
            },
            {
                "text": "PPTP",
                "correct": "0"
            },
            {
                "text": "EAP",
                "correct": "0"
            },
            {
                "text": "L2TP",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which VPN topology allows home-workers and employees in the field to connect to the corporate network?\n",
        "options": [
            {
                "text": "Site-to-Site",
                "correct": "0"
            },
            {
                "text": "Intranet VPN",
                "correct": "0"
            },
            {
                "text": "Client-to-Site",
                "correct": "1"
            },
            {
                "text": "Peer-to-Peer",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is a key feature of clientless VPNs that distinguishes them from traditional remote desktop products and client-to-site VPNs?\n",
        "options": [
            {
                "text": "They require a client app to operate.",
                "correct": "0"
            },
            {
                "text": "They allow connection through a browser.",
                "correct": "1"
            },
            {
                "text": "They cannot handle audio.",
                "correct": "0"
            },
            {
                "text": "They use separate HTTP requests for communication.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "How do gateways in a Site-to-Site VPN establish a secure connection?\n",
        "options": [
            {
                "text": "By using a public Wi-Fi network",
                "correct": "0"
            },
            {
                "text": "By using a shared password",
                "correct": "0"
            },
            {
                "text": "By exchanging security information",
                "correct": "1"
            },
            {
                "text": "By sending a verification email",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Which protocol is typically used for remote configuration of network appliances?\n",
        "options": [
            {
                "text": "SSH",
                "correct": "0"
            },
            {
                "text": "FTP",
                "correct": "1"
            },
            {
                "text": "SNMP",
                "correct": "0"
            },
            {
                "text": "HTTP",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the purpose of the scp command in SSH?\n",
        "options": [
            {
                "text": "To generate a new SSH key pair",
                "correct": "0"
            },
            {
                "text": "To securely copy files between hosts",
                "correct": "1"
            },
            {
                "text": "To list files in the remote directory",
                "correct": "0"
            },
            {
                "text": "To change the SSH server's configuration",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the purpose of the ssh-agent command?\n",
        "options": [
            {
                "text": "To restart the SSH server",
                "correct": "0"
            },
            {
                "text": "To store private keys securely",
                "correct": "1"
            },
            {
                "text": "To change the default SSH port",
                "correct": "0"
            },
            {
                "text": "To generate new SSH keys",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is an SSH host key used for?\n",
        "options": [
            {
                "text": "Storing user passwords securely",
                "correct": "0"
            },
            {
                "text": "Speeding up the SSH connection process",
                "correct": "0"
            },
            {
                "text": "Encrypting all data sent over the network",
                "correct": "0"
            },
            {
                "text": "Identifying the SSH server",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "Why is Telnet considered to be insecure?\n",
        "options": [
            {
                "text": "It uses strong encryption for all communications.",
                "correct": "0"
            },
            {
                "text": "It transmits data in plain text.",
                "correct": "1"
            },
            {
                "text": "It automatically blocks access to port 23.",
                "correct": "0"
            },
            {
                "text": "It can only transmit text, not binary files.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What does Network Level Authentication (NLA) protect the RDP server against?\n",
        "options": [
            {
                "text": "On-path attacks",
                "correct": "0"
            },
            {
                "text": "Phishing attacks",
                "correct": "0"
            },
            {
                "text": "Denial of service attacks",
                "correct": "1"
            },
            {
                "text": "SQL injection attacks",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is RDP Restricted Admin (RDPRA) Mode primarily used for?\n",
        "options": [
            {
                "text": "Allowing multiple users to share a single session",
                "correct": "0"
            },
            {
                "text": "Encrypting all RDP traffic with additional algorithms",
                "correct": "0"
            },
            {
                "text": "Mitigating the risk of credential compromise",
                "correct": "1"
            },
            {
                "text": "Increasing the speed of remote connections",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "You are in the middle of a big project at work. All of your work files are on a server at the office.\nYou want to be able to access the server desktop, open and edit files, save the files on the server,\nand print files to a printer that's connected to a computer at home.\nWhich protocol should you use?\n",
        "options": [
            {
                "text": "Telnet",
                "correct": "0"
            },
            {
                "text": "SSH",
                "correct": "0"
            },
            {
                "text": "FTP",
                "correct": "0"
            },
            {
                "text": "RDP",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What does the AUX port connect to for remote access?\n",
        "options": [
            {
                "text": "A fiber optic cable",
                "correct": "0"
            },
            {
                "text": "An analog modem",
                "correct": "1"
            },
            {
                "text": "A wireless router",
                "correct": "0"
            },
            {
                "text": "A digital modem",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "Why is out-of-band management considered more secure than in-band management?\n",
        "options": [
            {
                "text": "It operates over the production network.",
                "correct": "0"
            },
            {
                "text": "It uses stronger encryption algorithms.",
                "correct": "0"
            },
            {
                "text": "It requires physical access to the device.",
                "correct": "0"
            },
            {
                "text": "It is managed over a separate, dedicated channel.",
                "correct": "1"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is a limitation of using virtual out-of-band management with VLANs?\n",
        "options": [
            {
                "text": "It may still be compromised by a system-wide network failure.",
                "correct": "1"
            },
            {
                "text": "It does not support remote management.",
                "correct": "0"
            },
            {
                "text": "It can be implemented without any cost.",
                "correct": "0"
            },
            {
                "text": "It provides physical separation of management traffic.",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the role of an ACL in the context of a jump box?\n",
        "options": [
            {
                "text": "To encrypt data transmissions",
                "correct": "0"
            },
            {
                "text": "To determine the bandwidth allocation",
                "correct": "0"
            },
            {
                "text": "To list permissions for resource access",
                "correct": "1"
            },
            {
                "text": "To monitor network traffic",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the role of an API in the context of a jump box and automation?\n",
        "options": [
            {
                "text": "To reduce the need for secure connections",
                "correct": "0"
            },
            {
                "text": "To manually monitor network traffic",
                "correct": "0"
            },
            {
                "text": "To serve as an interface for automated scripting",
                "correct": "1"
            },
            {
                "text": "To act as a physical firewall",
                "correct": "0"
            }
        ],
        "type": "single"
    },
    {
        "text": "What is the benefit of using automation and orchestration in the context of a jump box?\n",
        "options": [
            {
                "text": "To manually configure appliances",
                "correct": "0"
            },
            {
                "text": "To reduce the need for secure connections",
                "correct": "0"
            },
            {
                "text": "To eliminate the need for a firewall",
                "correct": "0"
            },
            {
                "text": "To configure appliances via scripts efficiently",
                "correct": "1"
            }
        ],
        "type": "single"
    }
]