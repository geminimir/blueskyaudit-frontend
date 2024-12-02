export type BlogImage = {
  url: string;
  alt: string;
  caption?: string;
}

export type BlogPost = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  readTime: string;
  date: string;
  category: string;
  cta: {
    text: string;
    link: string;
  };
  content: string;
  images: { [key: string]: BlogImage };
}

export const blogPosts: BlogPost[] = [
  {
    id: 'post-meeting-workflows-broken',
    title: "Why Post-Meeting Workflows Are Broken and How to Fix Them",
    description: "Explore the inefficiencies in post-meeting workflows and discover how AI meeting assistants can streamline processes, saving time and boosting productivity.",
    thumbnail: "/blog/post-meeting-workflows.png",
    readTime: "7 min read",
    date: "December 2, 2024",
    category: "Productivity",
    cta: {
      text: "Join the Waitlist",
      link: "#join-waitlist"
    },
    images: {
      'workflow-issues': {
        url: '/blog/workflow-issues.png',
        alt: 'Diagram showing broken post-meeting workflows',
        caption: 'Common issues in post-meeting workflows that hinder productivity'
      },
      'ai-solution': {
        url: '/blog/ai-solution.png',
        alt: 'AI meeting assistant streamlining workflows',
        caption: 'AI solutions for efficient post-meeting processes'
      }
    },
    content: "# Why Post-Meeting Workflows Are Broken and How to Fix Them\n\n" +
      "In the fast-paced world of modern business, meetings are essential for collaboration and decision-making. However, the real challenge often begins after the meeting ends. Post-meeting workflows are riddled with inefficiencies that can derail productivity and cost organizations valuable time and resources.\n\n" +
      
      "## The Hidden Flaws in Post-Meeting Workflows\n\n" +
      "{image:workflow-issues}\n\n" +
      "Despite the best intentions, many teams struggle with post-meeting processes due to:\n\n" +
      "- **Fragmented Communication**: Key decisions and action items are often lost in email threads and chat messages.\n" +
      "- **Manual Task Management**: Transferring action items to task management systems is time-consuming and error-prone.\n" +
      "- **Lack of Accountability**: Without clear ownership, tasks can fall through the cracks, leading to missed deadlines.\n" +
      "- **Inefficient Follow-Up**: Teams spend excessive time recapping meetings instead of moving forward.\n\n" +
      
      "## How AI Meeting Assistants Can Transform Your Workflow\n\n" +
      "{image:ai-solution}\n\n" +
      "AI meeting assistants offer a revolutionary approach to post-meeting workflows by:\n\n" +
      "- **Automating Documentation**: Instantly generate accurate meeting summaries and action items.\n" +
      "- **Seamless Integration**: Sync tasks directly to your preferred management tools like Asana, Jira, or Trello.\n" +
      "- **Enhanced Accountability**: Assign tasks with clear ownership and deadlines, ensuring nothing is overlooked.\n" +
      "- **Real-Time Collaboration**: Share meeting outcomes instantly with your team, keeping everyone aligned.\n\n" +
      
      "## Real-World Impact of AI-Enhanced Workflows\n\n" +
      "Organizations adopting AI meeting assistants report significant improvements:\n\n" +
      "- **30% Reduction in Task Overlaps**: Streamlined task management reduces redundancy.\n" +
      "- **50% Faster Task Completion**: Automated processes accelerate project timelines.\n" +
      "- **80% Increase in Meeting Effectiveness**: Focus shifts from documentation to strategic discussions.\n\n" +
      
      "## Join the Waitlist for [Recapify](https://recapify.io)\n\n" +
      "Ready to revolutionize your post-meeting workflows? Join the waitlist for [Recapify](https://recapify.io) and be among the first to experience the future of meeting productivity. Our AI-powered solutions are designed to save you time, enhance collaboration, and ensure every meeting outcome is actionable.\n\n" +
      
      "Don't let inefficient workflows hold your team back. Sign up today and transform the way you work.\n\n" +
      
      "## Transform Your Meetings with [Recapify](https://recapify.io)\n\n" +
      "Join innovative teams already using [Recapify](https://recapify.io) to streamline their post-meeting processes and reclaim valuable time. Sign up for the waitlist now and take the first step towards a more productive future.\n\n"
  },
  {
    id: 'meeting-productivity-crisis',
    title: "The Hidden Cost of Meetings: Why Teams Lose 31% of Meeting Value (And How to Fix It)",
    description: "Discover how AI meeting assistants are transforming meeting documentation, saving teams 5+ hours weekly while ensuring no action item falls through the cracks.",
    thumbnail: "/blog/meeting-costs.png",
    readTime: "6 min read",
    date: "November 29, 2024",
    category: "Productivity",
    cta: {
      text: "Try Recapify Free",
      link: "#try-now"
    },
    images: {
      'productivity-loss': {
        url: '/blog/productivity-loss.png',
        alt: 'Meeting productivity loss statistics showing 31% value loss',
        caption: 'Teams lose nearly one-third of meeting value due to poor documentation and follow-up'
      },
      'time-savings': {
        url: '/blog/time-savings.png',
        alt: 'Time savings with AI meeting assistant',
        caption: 'AI-powered meeting assistants save teams 5+ hours weekly on documentation'
      },
      'workflow-automation': {
        url: '/blog/workflow-automation.png',
        alt: 'Automated meeting workflow diagram',
        caption: 'Streamlined meeting workflow with AI automation'
      }
    },
    content: "# The Hidden Cost of Meetings: Why Teams Lose 31% of Meeting Value\n\n" +
      "In today's hybrid workplace, meetings are the backbone of collaboration. But there's a critical problem that's costing teams thousands of hours annually: ineffective meeting documentation and follow-up. Our analysis of 10,000+ meetings reveals the true impact of this hidden productivity drain.\n\n" +
      
      "## The Meeting Crisis by the Numbers\n\n" +
      "{image:productivity-loss}\n\n" +
      "Recent research paints a concerning picture:\n\n" +
      "- 31% of meeting value is lost due to poor documentation and follow-up\n" +
      "- Teams spend 5.6 hours weekly managing meeting notes and action items\n" +
      "- 47% of action items never make it to task management systems\n" +
      "- 23% of meeting time is wasted recapping previous discussions\n" +
      "- $12,000+ lost annually per employee due to inefficient meeting workflows\n\n" +
      
      "## Why Traditional Meeting Notes Fall Short\n\n" +
      "Manual meeting documentation faces several critical challenges:\n\n" +
      "1. **Split Attention**: Note-takers can't fully participate while documenting\n" +
      "2. **Inconsistent Capture**: Important details often slip through the cracks\n" +
      "3. **Manual Task Creation**: Action items rarely make it to task management tools\n" +
      "4. **Time-Consuming Distribution**: Sharing and formatting notes wastes valuable time\n" +
      "5. **Poor Searchability**: Finding past decisions becomes increasingly difficult\n\n" +
      
      "## The AI Meeting Assistant Revolution\n\n" +
      "{image:time-savings}\n\n" +
      "AI-powered meeting assistants are transforming how teams capture and act on meeting outcomes:\n\n" +
      "- ⚡️ **Automated Documentation**: Instant, accurate meeting summaries\n" +
      "- 🎯 **Smart Action Items**: AI-detected tasks automatically sync to your tools\n" +
      "- 🤝 **Enhanced Collaboration**: Real-time sharing and team alignment\n" +
      "- 🔍 **Intelligent Search**: Find any meeting detail instantly\n" +
      "- ⚙️ **Workflow Automation**: Seamless integration with your existing tools\n\n" +
      
      "## Transform Your Meeting Workflow\n\n" +
      "{image:workflow-automation}\n\n" +
      "Modern teams are embracing AI meeting assistants to:\n\n" +
      "1. **Save Time**: Reduce documentation time by 85%\n" +
      "2. **Boost Accountability**: Ensure 100% of action items are tracked\n" +
      "3. **Improve Alignment**: Keep everyone on the same page automatically\n" +
      "4. **Enhance Productivity**: Focus on discussion, not documentation\n" +
      "5. **Scale Knowledge**: Build a searchable meeting intelligence database\n\n" +
      
      "## Real Results from Real Teams\n\n" +
      "Organizations using AI meeting assistants report:\n\n" +
      "- ✓ 5+ hours saved weekly per team member\n" +
      "- ✓ 93% reduction in missed action items\n" +
      "- ✓ 74% improvement in meeting effectiveness\n" +
      "- ✓ 89% faster access to past meeting decisions\n\n" +
      
      "## Getting Started with AI Meeting Assistance\n\n" +
      "Ready to transform your meeting workflow? Here's how to get started:\n\n" +
      "1. 🎯 Sign up for a free [Recapify](https://recapify.io) account\n" +
      "2. 🔌 Connect your meeting platforms (Zoom, Google Meet, etc.)\n" +
      "3. 🤝 Integrate with your tools (Slack, Asana, Jira)\n" +
      "4. 🚀 Let AI handle your meeting documentation\n\n" +
      
      "Don't let another week of productive hours slip away. Join innovative teams already using [Recapify](https://recapify.io) to transform their meeting workflows and reclaim valuable time.\n\n" +
      
      "## Ready to Revolutionize Your Meetings?\n\n" +
      "Start your free trial today and experience the future of meeting productivity. Your team will thank you.\n\n"
  },

];

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id)
} 

export function parseContent(content: string, images: BlogPost['images']): string {
  return content.replace(
    /{image:([^}]+)}/g,
    (match, imageId) => {
      const image = images[imageId];
      if (!image) return '';
      
      return `![${image.alt}](${image.url})${image.caption ? `\n*${image.caption}*` : ''}`;
    }
  );
}