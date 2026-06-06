/**
 * ECC Wrapper — Full Usage Demo
 * JavaScript wrapper for ECC (Agent harness performance optimization system)
 *
 * Run: node demo.js
 */

const { ECC } = require('./src/index.js');

async function main() {
  console.log('=== ECC Wrapper Demo ===\n');

  //1. Initialize ECC
  const ecc = new ECC({
    target: 'claude',
    profile: 'standard',
    projectPath: './demo-project',
    eccPath: null, // Auto-detect or fetch from upstream
  });

  // 2. List all available agents
  console.log('[1] Available Agents:');
  const agents = ecc.listAgents();
  console.log(`    Total: ${agents.length} agents`);
  console.log(`    Sample: ${agents.slice(0, 5).join(', ')} ...\n`);

  // 3. List skills by domain
  console.log('[2] Skills by Domain:');
  const skillsByDomain = ecc.listSkills();
  for (const [domain, skillList] of Object.entries(skillsByDomain)) {
    console.log(`    ${domain}: ${skillList.length} skills`);
  }
  console.log();

  // 4. List commands
  console.log('[3] Legacy Commands:');
  const commands = ecc.listCommands();
  console.log(`    Total: ${commands.length} commands`);
  console.log(`    Sample: ${commands.slice(0, 5).map(c => '/' + c).join(', ')} ...\n`);

  // 5. System status
  console.log('[4] System Status:');
  const status = ecc.status();
  console.log(`    Memory usage: ${status.memory?.used}/${status.memory?.total}`);
  console.log(`    Active sessions: ${status.sessions?.active}`);
  console.log(`    Installed instant count: ${status.instantCount}\n`);

  // 6. Run a skill (coding standards)
  console.log('[5] Running Skill — coding-standards:');
  const skillResult = await ecc.runSkill('coding-standards', {
    file: './demo-project/src/main.js',
    language: 'javascript',
    options: { strict: false },
  });
  console.log(`    Status: ${skillResult.ok ? '✅ Passed' : '❌ Failed'}`);
  console.log(`    Output: ${skillResult.summary || skillResult.message}\n`);

  // 7. Run a command
  console.log('[6] Running Command — /plan:');
  const cmdResult = await ecc.runCommand('plan', {
    task: 'Add user authentication',
    priority: 'high',
  });
  console.log(`    Plan: ${cmdResult.plan || cmdResult.message}\n`);

  // 8. Set a config flag
  console.log('[7] Setting Config:');
  ecc.setConfig('ECC_HOOK_STRICT', 'standard');
  ecc.setConfig('ECC_CONTEXT_MAX_CHARS', 4000);
  console.log('    ECC_HOOK_STRICT = standard');
  console.log('    ECC_CONTEXT_MAX_CHARS = 4000\n');

  // 9. Evolve learned patterns into skills
  console.log('[8] Evolving session patterns into skills:');
  const evolveResult = await ecc.evolve('session-demo-001');
  console.log(`    Skills evolved: ${evolveResult.created}/${evolveResult.analyzed}`);
  console.log(`    Pattern: ${evolveResult.pattern || 'generic-refactor'}\n`);

  console.log('=== Demo Complete ===');
  process.exit(0);
}

main().catch((err) => {
  console.error('❌ Demo error:', err.message);
  process.exit(1);
});